import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaHome,
  FaUsers,
  FaAward,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./About.css";

const teamMembers = [
  {
    name: "Mr. Parveen Aggrawal",
    post: "Director",
    img: "/images/sir.png",
    linkedin: "https://www.linkedin.com/in/ayush-goyal-98b157306/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Mr. Ayush Goyal",
    post: "Head of Department",
    img: "/images/ayush2.png",
    linkedin: "https://www.linkedin.com/in/ayush-goyal-98b157306/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: " Mr. Krishna Aggarwal",
    post: "Business Development Manager",
    img: "/images/krishna sir.png",
    linkedin: "https://www.linkedin.com/in/krishna-aggarwal-a3434a3a9",
    instagram: "https://www.instagram.com/",
  },
  
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">
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

      <section className="team-section fadeUp">
        <span className="tag">OUR TEAM</span>
        <h2>
          Meet Our <span>Luxury Experts</span>
        </h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card hoverUp" key={index}>
              <div className="team-img-box">
                <img src={member.img} alt={member.name} />
              </div>

              <h3>{member.name}</h3>
              <p>{member.post}</p>

              <div className="team-socials">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href={member.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      <section className="stats">
        <div className="statCard hoverGlow fadeUp">
          <FaUsers />
          <h2>10K+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="statCard hoverGlow fadeUp">
          <FaBuilding />
          <h2>50+</h2>
          <p>Projects</p>
        </div>

        <div className="statCard hoverGlow fadeUp">
          <FaAward />
          <h2>200+</h2>
          <p>Awards</p>
        </div>

        <div className="statCard hoverGlow fadeUp">
          <FaHome />
          <h2>1000+</h2>
          <p>Homes Delivered</p>
        </div>
      </section>

      <section className="cta fadeUp">
        <h2>Find Your Dream Luxury Property</h2>
        <p>Explore premium apartments & villas with golden class facilities.</p>

        <button onClick={() => navigate("/projects")}>Explore Projects</button>
      </section>
    </div>
  );
};

export default About;