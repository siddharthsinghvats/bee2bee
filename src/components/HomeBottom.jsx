import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";

const HomeBottom = () => {
  return (
    <>
      <div className="home-bottom">
        <div className="home-btm-img">
          <img src={home1} alt="" />
          No Minimum Order Order in for yourself or for the group, with no
          restrictions on order value
        </div>
        <div className="home-btm-img">
          <img src={home2} alt="" />
          Live Order Tracking Know where your order is at all times, from the
          restaurant to your doorstep
        </div>
        <div className="home-btm-img">
          <img src={home3} alt="" />
          Lightning-Fast Delivery Experience Bee2Bee's superfast delivery for
          food delivered fresh & on time
        </div>
      </div>
    </>
  );
};

export default HomeBottom;
