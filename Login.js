import React from "react";
import { GiLotusFlower } from "react-icons/gi";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Login">
      <h1 className="Title"  >
        <GiLotusFlower />
        Lotus Hotels & Bookings
        <h3>
          Across 80 cities in <b>India</b>
        </h3>
      </h1>
      <p>
        <b>There’s a smarter way to LoTus around </b> Login with your phone
        number and <br></br>
        get exclusive access to discounts and savings on <b>LoTus</b> stays and
        with our many travel partners.
      </p>
      <form class="forms" > 
        <p class="form-title">Login in to your account</p>
        <div class="input-container">
          <input type="number" placeholder="Enter number"  required/>
         
        </div>
        <div class="input-container">
          <input type="password" placeholder="Enter password" required />
        </div>
        <button type="submit" class="submit">
          <Link className="nav-link active" to={"/Home"}>
            Sign in
          </Link>
        </button>

        <p class="signup-link">
          No account?
          <Link className="nav-link active" to={"/Signup"}>
          
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
