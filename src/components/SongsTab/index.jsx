import { useState } from "react";
import "./songs.css"
import Carousel from "../Carousel"
export default function index({data})
{
   
   const [selectedCategory, setSelectedCategory] = useState("All");
   

   return (
      <div>
        <nav>
          <ul className="CategoryList">
            <li onClick={() => setSelectedCategory("All")}>All</li>
            <li onClick={() => setSelectedCategory("Rock")}>Rock</li>
            <li onClick={() => setSelectedCategory("Jazz")}>Jazz</li>
            <li onClick={() => setSelectedCategory("Blues")}>Blues</li>
          </ul>
        </nav>
  
        {/* Render your Carousel component based on the selected category */}
        <Carousel data={data.filter(item =>selectedCategory === "All" || item.genre.label === selectedCategory)} type="songs" />
      </div>
    );
}