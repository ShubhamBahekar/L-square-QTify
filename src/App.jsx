import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Section from "./components/Section"
import axios from 'axios';
import SongsTab from './components/SongsTab';
import FAQAccord from "./components/FAQAccord"

const ENDPOINT = 'https://qtify-backend-labs.crio.do/'

function App() {
  const [topAlbums , setTopAlbums] = useState([]);
  const [newAlbums , setNewAlbums] = useState([]);
  const [newsongs , setNewSongs] = useState([]);
  const[filteredDataValue , setFilteredDataValue] = useState([]);

  useEffect(()=>{
      
    axios.get(`${ENDPOINT}albums/top`).then(({data})=>{
      // console.log(data);
         setTopAlbums(data);
    })

    axios.get(`${ENDPOINT}albums/new`).then(({data})=>{
      // console.log(data);
         setNewAlbums(data);
    })

    axios.get(`${ENDPOINT}songs`).then(({data})=>{
         setNewSongs(data);
         console.log(data)
    })

  },[])
  return (
    <div className="App"> 
      <Navbar />
      <Hero />
      <Section  title="Top Albums" data={topAlbums}/>
      <Section  title="New Albums" data={newAlbums}/>
      <Section  title = "Songs"    data={newsongs} type="songs"/> 
      <FAQAccord />
    </div>
  );
}

export default App;
