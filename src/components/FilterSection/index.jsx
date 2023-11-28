import "./filterSection.css"
import { useState } from "react";
import Carousel from "../Carousel"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default  function index({data,title,filters,executeFilter}){

 const [selectedTab , setSelectedTab] = useState(0);

    return(<div className="section">
        <div>
        <h1 className="title">{title}</h1>
        </div>
        <Tabs value={selectedTab} onChange={(e,value)=>{
          executeFilter(filters[value].key);
          setSelectedTab(value);
        }} 
        TabIndicatorProps={{style:{backgroundColor:'var(--css-primary)'}}}
        >
         {filters.map((filter)=><Tab className="tab" key={filter.key}  label={filter.label}/>)} 
        </Tabs>
          <Carousel  data={data}/> 
        </div>);

}