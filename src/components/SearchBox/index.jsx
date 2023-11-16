import "./searchBox.css";

function index() {
    return (
      <form className="searchForm">
          <input 
              type="text" 
              placeholder="Search an album of your choice"
              className="searchBar"
              />
          <button className="searchButton">
              <img src="Search-icon.svg" alt="Search Icon" className="searchButtonImage" />
          </button>
      </form>
    )
  }
  
  export default index