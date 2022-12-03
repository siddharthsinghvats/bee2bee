import logo from "../assets/logo.png";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-search">
          <div className="logo-small">
            <img src={logo} alt="" />
          </div>
          <div>
            <MyLocationIcon />
            <input type="text" />
          </div>
        </div>
        <div className="nav-links">
          <ul>
            <li> <SearchIcon/> Search</li>
            <li><LocalOfferIcon/> Offers</li>
            <li><ShoppingCartIcon/>Cart</li>
            <li><AccountCircleIcon/> Profile</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
