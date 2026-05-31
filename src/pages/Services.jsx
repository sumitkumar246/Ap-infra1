import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Property Buying",
    desc: "We help you find your dream home at the best price.",
    icon: "🏠",
  },
  {
    id: 2,
    title: "Property Selling",
    desc: "Sell your property quickly with maximum value.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Rental Services",
    desc: "Find the best rental properties in your area.",
    icon: "🔑",
  },
  {
    id: 4,
    title: "Legal Support",
    desc: "Complete legal assistance for property deals.",
    icon: "📄",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <h1 className="title">Our Services</h1>

      <div className="services-grid">
        {servicesData.map((item) => (
          <div className="service-card" key={item.id}>
            <div className="icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <button
              onClick={() => navigate(`/service/${item.id}`)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;