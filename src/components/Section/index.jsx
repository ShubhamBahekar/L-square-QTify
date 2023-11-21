import "./section.css"
import Card from "../Card"
import { useState } from "react";
import Carousel from "../Carousel"
import SongsTab from "../SongsTab"

export default  function index({title,data,type}){

    const [isCollapsed , setIsCollapsed] = useState(false);

    return(<div className="section">
        <div className="section-header">
        <h1 className="title">{title}</h1>
        {type==="songs"?null:
        <h1 className="section-toggle-btn" onClick={()=>{setIsCollapsed(!isCollapsed)}}>{isCollapsed ? "Show All" : "Collapse" }</h1>}
        </div>
        
        {isCollapsed ? <Carousel  data={data}/> :(type==="songs" ?<SongsTab data={data} />:<div className="card-container">
         {data.map(cardData=>(
           
            <Card 
            key={cardData.id}
            imgSrc={cardData.image} 
            label ={cardData.title}
            followersCount={cardData.follows}
            />
    
            ))}

        </div>)}
        </div>);

}