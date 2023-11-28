import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Section from "./components/Section"
import axios from 'axios';
import FilterSection from './components/FilterSection';
import FAQAccord from "./components/FAQAccord"

const ENDPOINT = 'https://qtify-backend-labs.crio.do/'

function App() {
  const [topAlbums , setTopAlbums] = useState([]);
  const [newAlbums , setNewAlbums] = useState([]);
  const [songs , setSongs] = useState([]);
  const [filteredSongs , setFilteredSongs] = useState([]);
  const [genres , setGenres] =useState([]);

  useEffect(()=>{
      
    axios.get(`${ENDPOINT}albums/top`).then(({data})=>{
      // console.log(data);
         setTopAlbums(data);
    })
// another way of doing things
    axios.get(`${ENDPOINT}albums/new`).then((res)=>{
      // console.log(data);
         setNewAlbums(res.data);
    })

     axios.get(`${ENDPOINT}songs`).then((res)=>{ 
      setSongs(res.data)
      setFilteredSongs(res.data);
    })

     // data is the key
     axios.get(`${ENDPOINT}genres`).then((res)=>{ setGenres([{"key":"all","label":"All"},...res.data.data])})

  },[])
  return (
    <div className="App"> 
      <Navbar />
      <Hero />
      <Section navId='Ta' title="Top Albums" data={topAlbums}/>
      <Section navId='Na' title="New Albums" data={newAlbums}/>
      <FilterSection  title="Songs"  data={filteredSongs} filters={genres}
      
          executeFilter={(genre)=>{
            if(genre === 'all')
              setFilteredSongs(songs);
            else
            setFilteredSongs(songs.filter(song=>song.genre.key === genre));
          }}
      />
     <FAQAccord />
    </div>
  );
}

export default App;
