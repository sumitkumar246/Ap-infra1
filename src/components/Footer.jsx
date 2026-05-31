import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / Title */}
        <h2 className="footer-title">Apna Real Estate</h2>

        <p className="footer-text">
          Find your dream property with us. Premium homes, best locations.
        </p>

        {/* Social Icons */}
        <div className="social-icons">

          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>

          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>

        </div>

        {/* Bottom */}
        <p className="footer-bottom">
          © {new Date().getFullYear()} Apna Real Estate. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;