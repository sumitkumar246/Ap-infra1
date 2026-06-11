import express from "express";
import mongoose from "mongoose";
import Contact from "../models/contact.js";

const router = express.Router();

// Save Contact Form
router.post("/contact", async (req, res) => {
  try {
    console.log("================================");
    console.log("Mongo Ready State:", mongoose.connection.readyState);
    console.log("BODY:", req.body);

    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      message: req.body.message,
      projectName: req.body.projectName || "",
      brochure: req.body.brochure || "",
    });

    console.log("Before Save");

    const savedContact = await newContact.save();

    console.log("After Save");
    console.log("Saved Contact:", savedContact);

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: savedContact,
    });

  } catch (error) {
    console.error("FULL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get All Contacts
router.get("/contacts", async (req, res) => {
  try {
    console.log("Mongo Ready State:", mongoose.connection.readyState);

    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: contacts,
    });

  } catch (error) {
    console.error("FULL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;