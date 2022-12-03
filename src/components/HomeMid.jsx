import search from "../assets/search.png";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'


const HomeMid = () => {
  return (
    <>
      <div className="home-mid-bar">
        <div className="div-one">
          <h1>Begin your business</h1>
          <p className="home-text">
            Welcome to Redsoft, Order from your favorite stores
          </p>

          <div className="search-bar">
            <span className="search-item">
              <img src={search} alt="" />
              <span className="search-text"> Search...</span>
            </span>
            <span className="search-item locate">
              <MyLocationIcon />
              <span className="search-text"> Locate Me</span>
            </span>
          </div>
        </div>
        
        <div className="home-scroll">
            
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            
           
        </div>
      </div>
    </>
  );
};

export default HomeMid;
