import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaHome, FaUsers, FaAward } from "react-icons/fa";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">

      {/* HERO */}
      <section className="heroCard fadeUp">
        <span className="tag">ABOUT US</span>

        <h1>
          Building <span>Golden Luxury</span> Living Experience
        </h1>

        <p>
          Premium real estate crafted with modern architecture, golden elegance
          and world-class lifestyle experience.
        </p>
      </section>

      {/* INFO CARDS */}
      <section className="grid">

        <div className="glassCard hoverUp fadeUp">
          <h2>Who We Are</h2>
          <p>Trusted real estate brand delivering luxury homes since 2002.</p>
        </div>

        <div className="glassCard hoverUp fadeUp">
          <h2>Our Mission</h2>
          <p>To design world-class premium living spaces for modern lifestyle.</p>
        </div>

        <div className="glassCard hoverUp fadeUp">
          <h2>Our Vision</h2>
          <p>To become the most trusted luxury real estate company in India.</p>
        </div>

      </section>

      {/* FEATURES */}
      <section className="grid">

        <div className="featureCard hoverGlow fadeUp">
          <FaBuilding />
          <h3>Modern Architecture</h3>
          <p>Ultra-modern designs with premium golden finishing.</p>
        </div>

        <div className="featureCard hoverGlow fadeUp">
          <FaHome />
          <h3>Luxury Homes</h3>
          <p>High-end villas and premium apartments.</p>
        </div>

      </section>

      {/* STATS */}
      <section className="stats">

        <div className="statCard hoverGlow fadeUp">
          <FaUsers />
          <h2>10K+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="statCard hoverGlow fadeUp">
          <FaBuilding />
          <h2>120+</h2>
          <p>Projects</p>
        </div>

        <div className="statCard hoverGlow fadeUp">
          <FaAward />
          <h2>25+</h2>
          <p>Awards</p>
        </div>

        <div className="statCard hoverGlow fadeUp">
          <FaHome />
          <h2>5000+</h2>
          <p>Homes Delivered</p>
        </div>

      </section>

      {/* CTA */}
      <section className="cta fadeUp">
        <h2>Find Your Dream Luxury Property</h2>
        <p>Explore premium apartments & villas with golden class facilities.</p>

        <button onClick={() => navigate("/projects")}>
          Explore Projects
        </button>
      </section>

    </div>
  );
};

export default About;