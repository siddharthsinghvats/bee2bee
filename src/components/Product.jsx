import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import carrot from '../assets/carrot.png'
import garlic from '../assets/garlic.png'
import broccoli from '../assets/broccoli.png'
import capsicum from '../assets/capsicum.png'

import FoodCard from './FoodCard'
import Navbar from './Navbar'

const Product  = ()=>{
    return (
        <>
        <Navbar/>
         <div className="product-scroll">
            
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
        </div>
        <div className='filters'>
            <h3>1406 stores</h3>
            <ul>
                <li>Relevance</li>
                <li>Rating</li>
                <li>Delivery Time</li>
                <li>Cost: Low to High</li>
                <li>Cost: High to Low</li>
            </ul>
        </div>
        <div className='card-container'>
            <FoodCard image={carrot} title = "Carrot" price="30.50-/"/>
            <FoodCard image={broccoli} title = "Broccoli" price="30.50-/"/>
            <FoodCard image={capsicum} title = "Capsicum" price="30.50-/"/>
            <FoodCard image={garlic} title = "Garlic" price="30.50-/"/>
        </div>
        </>
    )
}

export default Product;