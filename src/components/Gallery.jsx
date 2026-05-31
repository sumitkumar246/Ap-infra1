import React from "react";
import "./Gallery.css";

const images = [
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">
          Luxury Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <img
              key={index}
              src={`${img}?q=80&w=1200&auto=format&fit=crop`}
              alt=""
              className="rounded-3xl h-80 w-full object-cover hover:scale-105 duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;