import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>SCSMS</h2>
          <p>Smart Cleanliness & Sanitation Management System</p>
        </div>

        <hr className="footer-divider" /> {/* Horizontal Line */}

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/track-complaints">Track Complaints</Link></li>
            <li><Link to="/report-issue">Report an Issue</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@scsms.com</p>
          <p>Phone: +91 88983 06282</p>
        </div>

        <hr className="footer-divider" /> {/* Horizontal Line */}

        <div class="developer-info">
          <p>Developed by <strong>Niraj Gupta</strong> - <a href="mailto:nirajguptaa1098@gmail.com">nirajguptaa1098@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SCSMS. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
