import React from "react";
import "./Navbar.css"
import { GiLotusFlower } from "react-icons/gi";
import { IoLogInSharp } from "react-icons/io5";
import { ImHome3 } from "react-icons/im";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark " >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <GiLotusFlower />
          LoTus Hotels
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" >
            <Link className="nav-link active" to={"/Home"}>
            <ImHome3 />
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to={"/Login"}>
              <IoLogInSharp />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
