import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectsDetails.css";

const projectData = [
  {
    id: "1",
    title: "Signature global",
    price: "₹2.5 Cr",
    location: "Gurgaon",
    description: "Premium luxury property with modern design, premium amenities and luxury living experience.",
    img: "/images/sign.png",
    pdf: "/pdfs/Multipager-SG-City-79B-A4-14.04.2023.pdf",
  },
  {
    id: "2",
    title: "M3M Dreams city of Panipat",
    price: "₹3.2 Cr",
    location: "Panipat",
    description: "Premium plotted development with clubhouse, pool, gym, library and wellness spaces.",
    img: "https://d2dy9w7mmecm6m.cloudfront.net/dy-images/residential/GlimpsesOfMasterpiece/genration-living_-_r4VHMssIvKLM.jpg",
    pdf: "/pdfs/M3M City Of Dreams Panipat Brochure.pdf",
  },
  {
    id: "3",
    title: "Godrej Evora Estate",
    price: "₹1.2 Cr",
    location: "Panipat",
    description: "Largest smart city development of Panipat with greens, clubhouse, sports zones and premium lifestyle.",
    img: "/images/godraj.png",
    pdf: "/pdfs/Evora Estate_Clubhouse.pdf",
  },
  {
    id: "4",
    title: "Gurgaon International City",
    price: "₹1.2 Cr",
    location: "Gurgaon",
    description: "Premium society project with modern amenities and flexible layout.",
    img: "https://upcomingprop.com/panipat/trident-park-town/images/gallery/gallery_img1.jpg",
    pdf: "/pdfs/CP Dossier Nature's Court.pdf",
  },
];

const ProjectsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((item) => item.id === id);

  if (!project) {
    return <h2 style={{ textAlign: "center", marginTop: "150px" }}>Project Not Found</h2>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={project.img} alt={project.title} />

        <div className="details-info">
          <h1>{project.title}</h1>
          <p className="price">{project.price}</p>
          <p className="location">📍 {project.location}</p>
          <p className="desc">{project.description}</p>

          <button
  onClick={() =>
    navigate("/contact", {
      state: {
        projectName: project.title,
        brochure: project.pdf,
      },
    })
  }
>
  Send Enquiry
</button>

         
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;