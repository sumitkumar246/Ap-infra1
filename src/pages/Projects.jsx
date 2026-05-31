import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Delhi NCR",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Gurgaon",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 3,
    title: "Beach House",
    location: "Goa",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 4,
    title: "Office Space",
    location: "Noida",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <h1 className="title">Our Premium Projects</h1>

      <div className="projects-grid">
        {projectsData.map((item) => (
          <div className="project-card" key={item.id}>
            
            <img src={item.img} alt={item.title} />

            <div className="overlay">
              <h2>{item.title}</h2>
              <p>{item.location}</p>

              {/* ONLY FIX: button working */}
              <button onClick={() => navigate(`/projects/${item.id}`)}>
                View Details
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;