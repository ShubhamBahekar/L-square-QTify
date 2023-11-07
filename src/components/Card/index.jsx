import "./Card.css";

export default function Card() {
    return (
        <span className="card">
            <div className="Inside_Card">
                <img src="albumImage.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="Followers">100 Follows</span>
                </div>
            </div>
            <div>
                <p className="Text">New Bollywood</p>
            </div>
        </span>
    );
}