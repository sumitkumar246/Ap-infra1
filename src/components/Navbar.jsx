import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  const goToEnquiry = () => {
    setOpen(false);
    navigate("/enquiry");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate("/")}>
        <img src="/image.png" alt="AP Infra Logo" className="logo-img" />

        <div className="logo-text">
          <h2>AP INFRA</h2>
          <span>GROUP</span>
        </div>
      </div>

      <button className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>

        <li>
          <button type="button" className="nav-btn" onClick={goToEnquiry}>
            Enquire Now
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;