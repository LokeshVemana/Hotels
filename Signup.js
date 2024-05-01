import React from "react";
import "./Sign.css"
import { GiLotusFlower } from "react-icons/gi";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="background">
      <h1>
       <GiLotusFlower />
       <b>LoTus</b></h1>
       <h1> Welcome to the <b>South indian's favourite</b> Hotel Bookings </h1>
      <h3 className="text">We appriciate your time and interest.</h3>
      <h3 className="text">Join with us :- <strong>Your Safety is our responsibility..!</strong></h3>
    <form class="form">
      <p class="title">Register </p>
      <p class="message">Signup now and get full access to our app. </p>
      <div class="flex">
        <label>
          <input  placeholder="" type="text" class="input" required/>
          <span>Firstname</span>
        </label>

        <label>
          <input  placeholder="" type="text" class="input" required/>
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input  placeholder="" type="Number" class="input"  required/>
        <span>Number</span>
      </label>

      <label>
        <input placeholder="" type="password" class="input" required />
        <span>Password</span>
      </label>
      <label>
        <input  placeholder="" type="password" class="input" required />
        <span>Confirm password</span>
      </label>
      <button class="submit">
      <Link className="nav-link active" to={"/Login"}> Submit</Link></button>
    </form>
    </div>
  );
};

export default Signup;
