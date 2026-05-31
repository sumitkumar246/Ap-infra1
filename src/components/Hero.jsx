import "./Hero.css";
import React from "react";
import { Link } from "react-router-dom";

import {
  FaBuilding,
  FaHome,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Home = () => {
  return (

    <div className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center">

        {/* Background Image */}
        <img
        className="image"
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <p className="text-yellow-500 uppercase tracking-[6px] mb-6 font-semibold">
              Luxury Real Estate
            </p>

            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              Find Your <br />
              Dream Home
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-8">
              Discover premium apartments, luxury villas,
              and modern living spaces crafted for elegance
              and comfort.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 mt-10">

              <Link
                to="/projects"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-5 rounded-full font-bold flex items-center gap-3 transition duration-300"
              >
                Explore Projects
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-black px-10 py-5 rounded-full font-bold transition duration-300"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-[#0f172a]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-white/10 p-10 rounded-[30px] backdrop-blur-lg">

              <h2 className="text-5xl font-bold text-yellow-500">
                10K+
              </h2>

              <p className="text-gray-300 mt-4">
                Happy Clients
              </p>

            </div>

            <div className="bg-white/10 p-10 rounded-[30px] backdrop-blur-lg">

              <h2 className="text-5xl font-bold text-yellow-500">
                150+
              </h2>

              <p className="text-gray-300 mt-4">
                Premium Projects
              </p>

            </div>

            <div className="bg-white/10 p-10 rounded-[30px] backdrop-blur-lg">

              <h2 className="text-5xl font-bold text-yellow-500">
                25+
              </h2>

              <p className="text-gray-300 mt-4">
                Luxury Awards
              </p>

            </div>

            <div className="bg-white/10 p-10 rounded-[30px] backdrop-blur-lg">

              <h2 className="text-5xl font-bold text-yellow-500">
                15+
              </h2>

              <p className="text-gray-300 mt-4">
                Years Experience
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-28 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">

            <p className="text-yellow-500 uppercase tracking-[5px] mb-4 font-semibold">
              Featured Properties
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Luxury Living Spaces
            </h2>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="h-80 w-full object-cover"
              />

              <div className="p-8">

                <div className="flex items-center gap-2 text-gray-500 mb-4">

                  <FaMapMarkerAlt className="text-yellow-500" />

                  Panipat, India

                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  M3M Society
                </h3>

                <p className="text-gray-600 mt-5 leading-7">
                  Premium apartments with luxury interiors
                  and world-class facilities.
                </p>

                <div className="flex items-center justify-between mt-8">

                  <h4 className="text-2xl font-bold text-yellow-500">
                    ₹3.2 Cr
                  </h4>

                  <button className="bg-black hover:bg-yellow-500 hover:text-black text-white px-6 py-3 rounded-full transition">
                    View
                  </button>

                </div>

              </div>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

              <img
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="h-80 w-full object-cover"
              />

              <div className="p-8">

                <div className="flex items-center gap-2 text-gray-500 mb-4">

                  <FaMapMarkerAlt className="text-yellow-500" />

                  Delhi NCR

                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  Skyline Towers
                </h3>

                <p className="text-gray-600 mt-5 leading-7">
                  Modern homes designed for premium urban lifestyle.
                </p>

                <div className="flex items-center justify-between mt-8">

                  <h4 className="text-2xl font-bold text-yellow-500">
                    ₹5.4 Cr
                  </h4>

                  <button className="bg-black hover:bg-yellow-500 hover:text-black text-white px-6 py-3 rounded-full transition">
                    View
                  </button>

                </div>

              </div>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="h-80 w-full object-cover"
              />

              <div className="p-8">

                <div className="flex items-center gap-2 text-gray-500 mb-4">

                  <FaMapMarkerAlt className="text-yellow-500" />

                  Gurugram, India

                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  Ocean Villas
                </h3>

                <p className="text-gray-600 mt-5 leading-7">
                  Luxury beach villas with breathtaking sea views.
                </p>

                <div className="flex items-center justify-between mt-8">

                  <h4 className="text-2xl font-bold text-yellow-500">
                    ₹7.8 Cr
                  </h4>

                  <button className="bg-black hover:bg-yellow-500 hover:text-black text-white px-6 py-3 rounded-full transition">
                    View
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="rounded-[40px] shadow-2xl"
            />

          </div>

          {/* Right Content */}
          <div>

            <p className="text-yellow-500 uppercase tracking-[5px] mb-5 font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              We Build Premium <br />
              Lifestyle Spaces
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-8">
              We provide world-class luxury apartments,
              villas, and commercial properties crafted
              with modern architecture and premium comfort.
            </p>

            {/* Features */}
            <div className="space-y-8 mt-12">

              <div className="flex items-start gap-5">

                <div className="bg-yellow-500 p-5 rounded-full">
                  <FaBuilding className="text-black text-2xl" />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    Premium Architecture
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    Modern and elegant luxury structures.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="bg-yellow-500 p-5 rounded-full">
                  <FaHome className="text-black text-2xl" />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    Luxury Homes
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    Spacious villas and premium apartments.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
};

export default Home;
