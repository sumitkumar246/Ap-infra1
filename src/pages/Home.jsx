
import React from "react";
import Hero from "../components/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-yellow-500 uppercase tracking-[5px] mb-4">
            Luxury Living
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            Premium Homes For Modern Lifestyle
          </h2>

          <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-8">
            Experience world-class living spaces with modern
            architecture, premium interiors, and luxury amenities.
          </p>

        </div>
      </section>
    </div>
  );
};

export default Home;
