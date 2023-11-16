import SearchBox from "../SearchBox"
import Button from "../Button"
import "./Navbar.css"

export default function Navbar(){
    return (
        <>
    <div className="navbar">
        <img src="qtifyLogo.png"  width={67} height={34}/>
        <SearchBox />
        <Button>Give Feedback</Button>
    </div> 
    </> 
    )
    

}