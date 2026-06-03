import React from "react";
import "./Enquiry.css";

const Enquiry = () => {
  return (
    <div className="enquiry-page">
      <div className="enquiry-box">
        <h1>Enquire Now</h1>
        <p>Fill your details and our property expert will contact you soon.</p>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Mobile Number" required />
          <textarea rows="5" placeholder="Your Requirement" required />

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;