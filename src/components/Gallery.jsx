import React from "react";
import "./Gallery.css";

const images = [
  {
    name: "Tanio Lamborghini Villas",
    img: "/images/tanino1.png",
  },
  {
    name: "M3M Dreams City Panipat",
    img: "/images/m3m.png",
  },
  {
    name: "Signature Global Sarvam",
    img: "/images/signature.png",
  },
  {
    name: "Trident Pak Town",
    img: "https://upcomingprop.com/panipat/trident-park-town/images/gallery/gallery_img1.jpg",
  },
  {
    name: "Godrej Evora Estate",
    img: "https://godrejsplots.com/godrej-evora-estate-panipat/images/godrej-evora-estate-plots-in-panipat-photos-banner4.webp",
  },
  {
    name: "Gurugram international city",
    img: "https://globalcitygurugram.in/wp-content/uploads/2022/03/HOTEL-TOWERS-PEDASTRIAN-PLAZA-VIEW-scaled.jpg",
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <p className="gallery-tag">LUXURY SPACES</p>

      <h2 className="gallery-title">
        Explore Our Premium Gallery
      </h2>

      <div className="gallery-grid">
        {images.map((item, index) => (
          <div className="gallery-card" key={index}>
            
            {/* Project Name */}
            <div className="gallery-name">
              {item.name}
            </div>

            <img src={item.img} alt={item.name} />

            <div className="gallery-overlay">
              <h3>{item.name}</h3>
              <p>Premium architecture with golden lifestyle.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;