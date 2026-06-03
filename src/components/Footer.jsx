import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-overlay">

        <div className="footer-container">

          {/* Company */}
          <div className="footer-col">
            <h2 className="footer-logo">AP INFRA GROUP</h2>

           <b> <p>
              Delivering premium residential and commercial properties
              with trust, transparency and excellence.
            </p></b>

            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>

            <ul>
              <b><li><a href="/">Home</a></li></b>
              <b><li><a href="/about">About Us</a></li></b>
              <b><li><a href="/projects">Projects</a></li></b>
              <b><li><a href="/services">Services</a></li></b>
              <b><li><a href="/contact">Contact</a></li></b>
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-col">
            <h3>Featured Projects</h3>

            <ul>
              <b><li>Luxury Villas</li></b>
              <b><li>Premium Apartments</li></b>
              <b><li>Commercial Spaces</li></b>
              <b><li>Investment Properties</li></b>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3>Contact Us</h3>

           <b> <p>
              <FaMapMarkerAlt /> Gurgaon, Haryana
            </p></b>

           <b> <p>
              <FaPhoneAlt /> +91 7082003056
            </p></b>

             <b> <p>
            <FaEnvelope /> info@apinfra.com
            </p></b>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} AP INFRA GROUP. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;