import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaKey,
  FaFileContract,
  FaArrowLeft,
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

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services[id];

  if (!service) {
    return <h2 style={{ textAlign: "center" }}>Service Not Found</h2>;
  }

  return (
    <div className="service-details">
      <div className="service-hero">
        <button
          className="back-btn"
          onClick={() => navigate("/services")}
        >
          <FaArrowLeft /> Back
        </button>

        <div className="service-icon-large">
          {service.icon}
        </div>

        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>

      <div className="features-box">
        <h2>What's Included</h2>

        <div className="features-grid">
          {service.features.map((feature, index) => (
            <div key={index} className="feature-card">
              ✓ {feature}
            </div>
          ))}
        </div>

        <button
          className="contact-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;