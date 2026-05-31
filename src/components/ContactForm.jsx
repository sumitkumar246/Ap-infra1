import React, { useState } from "react";

import axios from "axios";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const PremiumContactForm = () => {

  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // REGISTER
  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        }
      );

      alert("Registration Successful ✅");

      console.log(res.data);

    } catch (error) {

      console.log(error);

      alert("Registration Failed ❌");

    }

  };

  // LOGIN
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful ✅");

    } catch (error) {

      console.log(error);

      alert("Login Failed ❌");

    }

  };

  return (

    <section className="relative bg-[#0f172a] py-28 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <div>

          <p className="text-yellow-500 uppercase tracking-[5px] font-semibold mb-5">
            AP Infra Group
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Luxury Real Estate <br />
            For Modern Living
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-8">
            Discover premium apartments, villas, and
            commercial spaces crafted with elegance,
            comfort, and modern architecture.
          </p>

          {/* INFO */}
          <div className="mt-14 space-y-8">

            <div className="flex items-center gap-5 group">

              <div className="bg-yellow-500 p-5 rounded-2xl group-hover:rotate-6 transition">

                <FaPhoneAlt className="text-black text-2xl" />

              </div>

              <div>

                <h4 className="text-white text-2xl font-semibold">
                  Phone Number
                </h4>

                <p className="text-gray-400">
                  +91 7082003056
                </p>

              </div>

            </div>


            <div className="flex items-center gap-5 group">

              <div className="bg-yellow-500 p-5 rounded-2xl group-hover:rotate-6 transition">

                <FaEnvelope className="text-black text-2xl" />

              </div>

              <div>

                <h4 className="text-white text-2xl font-semibold">
                  Email Address
                </h4>

                <p className="text-gray-400">
                  info@apinfragroup.com
                </p>

              </div>

            </div>


            <div className="flex items-center gap-5 group">

              <div className="bg-yellow-500 p-5 rounded-2xl group-hover:rotate-6 transition">

                <FaMapMarkerAlt className="text-black text-2xl" />

              </div>

              <div>

                <h4 className="text-white text-2xl font-semibold">
                  Office Location
                </h4>

                <p className="text-gray-400">
                  Gurgaon, Haryana, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="relative">

          <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20 rounded-[40px]"></div>

          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

            <div className="flex items-center justify-between mb-10">

              <h3 className="text-4xl font-bold text-white">

                {isLogin ? "Login" : "Register"}

              </h3>

              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-yellow-500 font-semibold hover:text-yellow-400 transition"
              >

                {isLogin
                  ? "Create Account"
                  : "Already Login?"}

              </button>

            </div>

            <form
              onSubmit={
                isLogin
                  ? handleLogin
                  : handleRegister
              }
              className="space-y-7"
            >

              {/* NAME */}
              {!isLogin && (

                <div>

                  <label className="block text-gray-300 mb-3 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-5 py-4 rounded-2xl outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
                  />

                </div>

              )}

              {/* EMAIL */}
              <div>

                <label className="block text-gray-300 mb-3 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-5 py-4 rounded-2xl outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
                />

              </div>

              {/* PHONE */}
              {!isLogin && (

                <div>

                  <label className="block text-gray-300 mb-3 font-medium">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-5 py-4 rounded-2xl outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
                  />

                </div>

              )}

              {/* PASSWORD */}
              <div>

                <label className="block text-gray-300 mb-3 font-medium">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-5 py-4 rounded-2xl outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
                />

              </div>

              {/* MESSAGE */}
              {!isLogin && (

                <div>

                  <label className="block text-gray-300 mb-3 font-medium">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-5 py-4 rounded-2xl outline-none resize-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
                  ></textarea>

                </div>

              )}

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3 transition duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(250,204,21,0.4)]"
              >

                {isLogin
                  ? "Login"
                  : "Register"}

                <FaPaperPlane />

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );
};

export default PremiumContactForm;