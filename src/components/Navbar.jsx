import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">SCSMS</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>

      
    </nav>  
  );
};

export default Navbar;
