import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/12785063_3840_2160_30fps.mp4" type="video/mp4" />
      </video>
      

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tag">AP INFRA GROUP</p>

        <h1>
          Building The Future
          <br />
          Of Luxury Living
        </h1>

        <p className="hero-text">
          Discover premium residences, luxury villas and world-class
          developments designed for an extraordinary lifestyle.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() => navigate("/projects")}
            className="gold-btn"
          >
            Explore Projects
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="white-btn"
          >
            Schedule Visit
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;