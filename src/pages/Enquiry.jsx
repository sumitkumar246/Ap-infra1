import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    requirement: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          requirement: "",
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-box">
        <h1>Enquire Now</h1>
        <p>Fill your details and our property expert will contact you soon.</p>

        {success && <h3>Your enquiry sent successfully ✅</h3>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <textarea
            name="requirement"
            rows="5"
            placeholder="Your Requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;