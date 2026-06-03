import React from "react";
import "./Gallery.css";

const images = [
  "https://c8.alamy.com/comp/3B7DBTE/elevatad-view-of-the-exchange-106-or-trx-signature-tower-at-sunset-kuala-lumpur-malaysia-3B7DBTE.jpg",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <p className="gallery-tag">LUXURY SPACES</p>
      <h2 className="gallery-title">Explore Our Premium Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />

            <div className="gallery-overlay">
              <h3>Luxury Living</h3>
              <p>Premium architecture with golden lifestyle.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;