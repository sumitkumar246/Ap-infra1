import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaKey,
  FaFileContract,
  FaArrowLeft,
  FaFilePdf,
} from "react-icons/fa";
import "./ServiceDetails.css";

const services = {
  1: {
    title: "Property Buying",
    icon: <FaHome />,
    description:
      "We help clients find the perfect residential and commercial properties with complete market analysis and expert guidance.",
    features: [
      "Verified Property Listings",
      "Investment Consultation",
      "Site Visits & Inspections",
      "Price Negotiation Support",
    ],
  },

  2: {
    title: "Property Selling",
    icon: <FaMoneyBillWave />,
    description:
      "Sell your property quickly with maximum market exposure and professional marketing strategies.",
    features: [
      "Property Valuation",
      "Professional Marketing",
      "Buyer Network Access",
      "Fast Deal Closure",
    ],
  },

  3: {
    title: "Rental Services",
    icon: <FaKey />,
    description:
      "Discover premium rental properties for residential and commercial purposes.",
    features: [
      "Verified Tenants",
      "Rental Agreements",
      "Property Management",
      "Quick Occupancy",
    ],
  },

  4: {
    title: "Legal Support",
    icon: <FaFileContract />,
    description:
      "Complete legal assistance for safe and transparent property transactions.",
    features: [
      "Document Verification",
      "Registry Assistance",
      "Legal Consultation",
      "Ownership Validation",
    ],
  },
};

const brochures = [
  {
    title: "M3M City Of Dreams",
    location: "Sector 36 & 37, Panipat",
    text: "Largest smart city development of Panipat with greens, clubhouse, sports zones and premium lifestyle.",
    pdf: "/pdfs/m3m-city-of-dreams.pdf",
  },
  {
    title: "Godrej Evora Estate",
    location: "Sector 40, Panipat",
    text: "Peaceful plotted estate with clubhouse, pool, gym, library, theatre, cafe and wellness spaces.",
    pdf: "/pdfs/godrej-evora-estate.pdf",
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services[id];

  if (!service) {
    return <h2 className="not-found">Service Not Found</h2>;
  }

  return (
    <div className="service-details">
      <section className="service-hero">
        <button className="back-btn" onClick={() => navigate("/services")}>
          <FaArrowLeft /> Back
        </button>

        <div className="service-icon-large">{service.icon}</div>

        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </section>

      <section className="features-box">
        <h2>What's Included</h2>

        <div className="features-grid">
          {service.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span>✓</span> {feature}
            </div>
          ))}
        </div>

        <button className="contact-btn" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>

      <section className="brochure-section">
        <span className="small-title">PROJECT PDF</span>
        <h2>Premium Project Brochures</h2>
        <p className="brochure-subtitle">
          View complete details, amenities and project information.
        </p>

        <div className="brochure-cards">
          {brochures.map((item, index) => (
            <div className="brochure-card" key={index}>
              <div className="pdf-icon">
                <FaFilePdf />
              </div>

              <h3>{item.title}</h3>
              <h4>{item.location}</h4>
              <p>{item.text}</p>

              <a href={item.pdf} target="_blank" rel="noreferrer">
                View Brochure
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;