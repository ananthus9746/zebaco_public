import React from "react";
// import Menu from './javascript'

import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo green (1).png";
// import Home from '../pages/User/Home/Home'
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav_wrapper nav_header_wrapper sticky top-0 left-0 w-full">
      
      <nav className="user_nav sticky top-0 left-0 w-full">
        <img className="company_logo" src={logo} alt="" />

        <div className="nav_links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Projects
          </NavLink>

          <NavLink
          to="/Support-Service"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          >Support Service</NavLink>


        </div>

        <NavLink
          to="/ConnectWallets"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <button className="wllet_btn ">Connect Wallet</button>
        </NavLink>

      </nav>
    </div>
  );
}

export default Navbar;
