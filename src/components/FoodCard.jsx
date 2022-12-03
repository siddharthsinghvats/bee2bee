import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from '../assets/logo.png'
const FoodCard = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.image} alt="food" />
      </div>
      
        <div className="card-body">
          <div className="card-headers">
            <h2>{props.title}</h2>
            <h3>1 kg</h3>
            <h4>{props.price}</h4>
          </div>
          <div className="icons">
          <FavoriteIcon />
          <ShoppingCartIcon />
         </div>
        </div>
      
    </div>
  );
};

export default FoodCard;
