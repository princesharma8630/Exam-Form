import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <a href="/" className="logo">ExamPortal</a>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
           <li><Link to="/About" className="about">About</Link></li>
            <li><Link to="/Features">Features</Link></li>

        </ul>
        <Link className="apply-btn" to="/ExamForm">Apply Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;