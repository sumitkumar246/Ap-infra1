import { Link } from "react-router-dom";
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
              <a href="https://www.facebook.com/apinfragroup?mibextid=wwXIfr&mibextid=wwXIfr"><FaFacebookF /></a>
              <a href="https://www.instagram.com/ap_infra_group?igsh=NXJ2NGp2YnE3bDZu&utm_source=qr"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/ap-infra-group/"><FaLinkedinIn /></a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>

            <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/projects">Projects</Link></li>
  <li><Link to="/services">Services</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
          </div>

          {/* Projects */}
          <div className="footer-col">
            <h3>Featured Projects</h3>

            <ul>
              <li>Luxury Villas</li>
              <li>Premium Apartments</li>
              <li>Commercial Spaces</li>
              <li>Investment Properties</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3>Contact Us</h3>

            <p>
              <FaMapMarkerAlt />Tdi city sco 37 near toll plaza Sector 39 panipat Haryana PIN code 132103
            </p>

            <p>
              <FaPhoneAlt /> +91 7082003056
            </p>

              
            <FaEnvelope /> info@apinfra.com
            
          </div>

        </div>

        <div className="footer-bottom">
          
            © {new Date().getFullYear()} AP INFRA GROUP. All Rights Reserved.
          
        </div>

      </div>

    </footer>
  );
};

export default Footer;