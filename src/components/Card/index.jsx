import "./Card.css";
import { Tooltip } from "@mui/material";
export default function index({songs,imgSrc,followersCount,label}) {
    return (
        <Tooltip title={songs} placement="top">
        <div className="card-wrapper">
            <div className="card">
            <div className="card-img-frame">
               <img src={imgSrc}/>
            </div>
            <div className="card-content">
                <div className="card-content-pill">
                 <span>{followersCount} Follows</span>
                </div>
            </div>
            </div>
            <p className="card-label">
               {label}
            </p>
        </div>
        </Tooltip>
    );
}