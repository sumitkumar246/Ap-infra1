import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectsDetails.css";

const projectData = [
  {
    id: "1",
    title: "Luxury Villa",
    price: "₹2.5 Cr",
    location: "Delhi NCR",
    description:
      "Premium luxury villa with modern design, swimming pool, garden area and smart home features.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: "2",
    title: "Modern Apartment",
    price: "₹80 Lakh",
    location: "Gurgaon",
    description:
      "Fully furnished apartment with gym, security and parking facilities.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: "3",
    title: "Beach House",
    price: "₹85 Lakh",
    location: "Goa",
    description:
      "Compact and comfortable studio apartment with modern amenities.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: "4",
    title: "Office Space",
    price: "₹1.2 Cr",
    location: "Noida",
    description:
      "Spacious office space with modern amenities and flexible layout.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return <h2 style={{ padding: "100px" }}>Project not found</h2>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={project.img} alt={project.title} />

        <div className="details-info">
          <h1>{project.title}</h1>

          <div className="price">💰 {project.price}</div>

          <div className="location">📍 {project.location}</div>

          <p className="desc">{project.description}</p>

          <button
            className="book-btn"
            onClick={() =>
              navigate("/contact", {
                state: {
                  projectName: project.title,
                },
              })
            }
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;