
import logo from "../assets/logo.png";

const Nav = () => {
  
    const showLogin=()=>{
        const element = document.getElementById('login-container');
        element.classList.toggle('show');
    }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <div className="logo-text">BEE<br/> 2 <br/>BEE</div>
        </div>
        <div style = {{cursor:"pointer"}}  className="login-signup" onClick={showLogin} > Login/Signup</div>
        
      </div>
    </>
  );
};

export default Nav;
