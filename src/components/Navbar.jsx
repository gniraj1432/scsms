import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if either user or bmc_user is logged in
    const user = localStorage.getItem("user") || localStorage.getItem("bmc_user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    // Remove both just to be safe
    localStorage.removeItem("user");
    localStorage.removeItem("bmc_user");

    setIsLoggedIn(false);
    navigate("/"); // Redirect to home
    navigate(0);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">SCSMS</Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        {isLoggedIn && (
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        )}
        {/* <li><Link to="/" onClick={() => setMenuOpen(false)}>Logout</Link></li> */}
      </ul>
    </nav>  
  );
};

export default Navbar;
