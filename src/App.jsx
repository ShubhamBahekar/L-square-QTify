import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Section from "./components/Section"
import axios from 'axios';

const ENDPOINT = 'https://qtify-backend-labs.crio.do/'

function App() {
  const [topAlbums , setTopAlbums] = useState([]);
  const [newAlbums , setNewAlbums] = useState([]);

  useEffect(()=>{
      
    axios.get(`${ENDPOINT}albums/top`).then(({data})=>{
      // console.log(data);
         setTopAlbums(data);
    })

    axios.get(`${ENDPOINT}albums/new`).then(({data})=>{
      // console.log(data);
         setNewAlbums(data);
    })
  },[])
  return (
    <div className="App"> 
      <Navbar />
      <Hero />
      <Section  title="Top Albums" data={topAlbums}/>
      <Section  title="New Albums" data={newAlbums}/>
    </div>
  );
}

export default App;
