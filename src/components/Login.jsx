import logo from "../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const Login = () => {
  const hide=()=>{
    const element = document.getElementById('login-container');
    element.classList.toggle('show');
}

  return (
    <div className="hide" id="login-container">
      
      <div className="login-form">
        <div className="logo">
          <img src={logo} alt="" />
          <div className="logo-text">
            BEE
            <br /> 2 <br />
            BEE
          </div>
        </div>
        <div className="login-headings">
          <h2>Welcome Back!</h2>
          <h4>Login to continue</h4>
        </div>

        <label htmlFor="">Email</label>
        <input className="input" type="text" />
        <label htmlFor="">Password</label>
        <input className="input" type="password" />
        <div className="forgot-pass input">
          <span>
            <input type="checkbox" />
            <label htmlFor="">Remember Me!</label>
          </span>
          <span className="forgot-pass-text">Forgot Password?</span>
        </div>
        <div className="input">
          By continuing you agree to our{" "}
          <a href="" style = {{cursor:"pointer"}} >Terms of Service and Privacy Policy</a>
          <Link to="/products"><div style = {{cursor:"pointer"}}  className="login-signup login" >Login</div></Link>
          <div className="or">
            <hr /> <span>Or</span> <hr />
          </div>
          <div className="oauth-btns">
            <button style = {{cursor:"pointer"}}  className="oauth">Login with Google</button>
            <button style = {{cursor:"pointer"}}  className="oauth">Login with Facebook</button>
          </div>
        </div>
        <div className="login-btm-text">
          <div>
            Forgot your login details? <span className="bold">Get help logging in</span>
          </div>
          <div>
            Don't have an account? <span className="bold">Sign up</span>
          </div>
        </div>
      </div>
      <div style = {{cursor:"pointer"}} onClick={hide}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Login;
