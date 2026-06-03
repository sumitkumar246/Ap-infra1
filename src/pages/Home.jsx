import React, { useState } from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import "./Home.css";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <main className="home" onMouseMove={handleMove}>
      <div
        className="cursor-light"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>

      <Hero />

      <section className="luxury-intro">
        <p className="section-tag">AP INFRA GROUP</p>
        <h2>Crafting Landmarks, Creating Luxury Living</h2>
        <p>
          Discover premium residences, modern architecture, elegant interiors
          and world-class amenities designed for a refined lifestyle.
        </p>
      </section>

      <section className="promise-section">
        <div className="promise-card">
          <h3>01</h3>
          <h4>Premium Locations</h4>
          <p>Properties in high-growth and prime city locations.</p>
        </div>

        <div className="promise-card">
          <h3>02</h3>
          <h4>Luxury Design</h4>
          <p>Modern homes with elegant architecture and premium finishes.</p>
        </div>

        <div className="promise-card">
          <h3>03</h3>
          <h4>Trusted Investment</h4>
          <p>Transparent deals with long-term value and growth potential.</p>
        </div>
      </section>

      <Gallery />
    </main>
  );
};

export default Home;