import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">My Brand</div>
      <img src="https://media.licdn.com/dms/image/v2/D560BAQEWcEarXUQ-4g/company-logo_200_200/B56ZtVP1MrJoAI-/0/1766661777186/ap_infra_group_logo?e=2147483647&v=beta&t=B9U1C6BQdOahTgLkTqDJ4WCo9vKiNtyfeMXHzPgzHxY" alt="Logo" />

      {/* MENU ICON */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

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
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;