import "./Card.css";

export default function Card({imgSrc,followersCount,label}) {
    return (
        <div className="card-wrapper">
            <div className="card">
            <div className="card-img-frame">
               <img  className="card-img" src={imgSrc}/>
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
    );
}