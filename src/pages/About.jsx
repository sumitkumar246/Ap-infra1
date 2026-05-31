
import React from "react";
import {
  FaBuilding,
  FaHome,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="overflow-hidden bg-white">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">

          <p className="text-yellow-500 uppercase tracking-[6px] mb-5 font-semibold">
            About Us
          </p>

          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Building Luxury <br />
            Living Spaces
          </h1>

          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-8">
            We create premium real estate experiences with
            modern architecture, luxury interiors, and world-class lifestyle.
          </p>

        </div>
      </section>

      {/* About Section */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="rounded-[40px] shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute bottom-[-40px] right-[-20px] bg-yellow-500 p-8 rounded-[30px] shadow-2xl">

              <h2 className="text-5xl font-bold text-black">
                24+
              </h2>

              <p className="text-black font-semibold mt-2">
                Years Experience
              </p>

            </div>

          </div>

          {/* Right Content */}
          <div>

            <p className="text-yellow-500 uppercase tracking-[5px] mb-5 font-semibold">
              Who We Are
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Trusted Real Estate <br />
              Company Since 2002
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-8">
              We specialize in luxury apartments, villas,
              and commercial spaces designed for modern living.
              Our mission is to provide elegant homes with
              premium quality and exceptional comfort.
            </p>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              From architecture to interiors, every detail
              is crafted to deliver world-class lifestyle experiences.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-8 mt-12">

              <div className="bg-gray-100 p-8 rounded-[30px] hover:bg-yellow-500 transition duration-300 group">

                <FaBuilding className="text-5xl text-yellow-500 group-hover:text-black mb-5" />

                <h3 className="text-2xl font-bold text-gray-900">
                  Modern Architecture
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  Elegant and innovative building designs.
                </p>

              </div>

              <div className="bg-gray-100 p-8 rounded-[30px] hover:bg-yellow-500 transition duration-300 group">

                <FaHome className="text-5xl text-yellow-500 group-hover:text-black mb-5" />

                <h3 className="text-2xl font-bold text-gray-900">
                  Luxury Homes
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  Premium villas and modern apartments.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0f172a] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-[35px] p-10">

              <FaUsers className="text-5xl text-yellow-500 mx-auto mb-5" />

              <h2 className="text-5xl font-bold text-white">
                10K+
              </h2>

              <p className="text-gray-300 mt-4">
                Happy Clients
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-[35px] p-10">

              <FaBuilding className="text-5xl text-yellow-500 mx-auto mb-5" />

              <h2 className="text-5xl font-bold text-white">
                120+
              </h2>

              <p className="text-gray-300 mt-4">
                Luxury Projects
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-[35px] p-10">

              <FaAward className="text-5xl text-yellow-500 mx-auto mb-5" />

              <h2 className="text-5xl font-bold text-white">
                25+
              </h2>

              <p className="text-gray-300 mt-4">
                Industry Awards
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-[35px] p-10">

              <FaHome className="text-5xl text-yellow-500 mx-auto mb-5" />

              <h2 className="text-5xl font-bold text-white">
                5000+
              </h2>

              <p className="text-gray-300 mt-4">
                Homes Delivered
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <p className="text-yellow-500 uppercase tracking-[5px] mb-5">
            Start Your Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Find Your Dream <br />
            Luxury Property
          </h2>

          <p className="text-gray-600 mt-8 text-lg leading-8 max-w-3xl mx-auto">
            Discover premium apartments and luxury villas
            crafted for modern lifestyle and exceptional comfort.
          </p>

          <button className="mt-10 bg-black hover:bg-yellow-500 hover:text-black text-white px-10 py-5 rounded-full text-lg font-bold transition duration-300">
            Explore Projects
          </button>

        </div>
      </section>

    </div>
  );
};

export default About;
