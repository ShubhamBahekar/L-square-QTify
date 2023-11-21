import "./Card.css";

export default function Card({imgSrc,followersCount,label,type}) {
    return (
        <div className="card-wrapper">
            <div className="card">
            <div className="card-img-frame">
               <img src={imgSrc}/>
            </div>
            <div className="card-content">
                <div className="card-content-pill">
                    {type==="songs"?<span>{followersCount} likes</span>:
                 <span>{followersCount} Follows</span>}
                </div>
            </div>
            </div>
            <p className="card-label">
               {label}
            </p>
        </div>
    );
}