import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Signature Global Sarvam",
    location: "Gurgaon",
    rating: 4.8,
    img: "/images/signature.png",
    },
  {
    id: 2,
    title: "M3M Dreams city of Panipat",
    location: "Panipat",
    rating: 4.9,
    img: "/images/m3m.png",

  },
  {
    id: 3,
    title: "Godrej Evora Estate",
    location: "Panipat",
    rating: 4.7,
     img: "/images/godraj.png",
  },
  {
    id: 4,
    title: "Gurgaon international city",
    location: "Gurgaon",
    rating: 5.0,
    img: "/images/gic.png",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">

      {/* HERO SECTION */}
      <div className="projects-hero fadeUp">
        <h1>Our <span>Golden Luxury</span> Projects</h1>
        <p>
          Explore premium villas, apartments and commercial spaces designed
          with world-class architecture and golden elegance.
        </p>
      </div>

      {/* GRID */}
      <div className="projects-grid">

        {projectsData.map((item) => (
          <div className="project-card hoverUp fadeUp" key={item.id}>

            <img src={item.img} alt={item.title} />

            <div className="overlay">

              <div className="rating">
                <FaStar /> {item.rating}
              </div>

              <h2>{item.title}</h2>

              <p>
                <FaMapMarkerAlt /> {item.location}
              </p>

              <button onClick={() => navigate(`/projects/${item.id}`)}>
                View Details
              </button>

            </div>

          </div>
        ))}
      </div>

      {/* EXTRA CONTENT */}
      <div className="info-section fadeUp">

        <h2>Why Choose Our Projects?</h2>

        <div className="info-grid">

          <div className="info-card">
            <h3>🏗 Premium Construction</h3>
            <p>High quality architecture with modern design standards.</p>
          </div>

          <div className="info-card">
            <h3>💎 Golden Interiors</h3>
            <p>
Golden interior luxury interiors with elegant design with premium work.</p>
          </div>

          <div className="info-card">
            <h3>📍 Prime Locations</h3>
            <p>All projects in top cities like Gurgaon & Panipat.</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Projects;