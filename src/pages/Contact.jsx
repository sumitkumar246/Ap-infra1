import React, { useState } from "react";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/contact",
        formData
      );

      console.log(res.data);
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-left">
          <span className="contact-tag">CONTACT US</span>

          <h1>
            Let’s Find Your <span>Dream Property</span>
          </h1>

          <p>
            Connect with AP Infra Luxury Living for premium villas, apartments,
            plots and real estate consultation.
          </p>

          <div className="contact-info">
            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h3>Call Us</h3>
                <p>+91 7082003056</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>info@apinfra.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h3>Location</h3>
                <p>Gurgaon, Haryana</p>
              </div>
            </div>

            <a
              href="https://wa.me/919711005826"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-box">
          <h2>Send Inquiry</h2>

          {success && (
            <div className="success-message">
              Your Message Sent Successfully ✅
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;