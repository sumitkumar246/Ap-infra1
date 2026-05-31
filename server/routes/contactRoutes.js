import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Save Contact Form
router.post("/contact", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const newContact = new Contact(req.body);

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
    const contacts = await Contact.find();

    res.status(200).json(contacts);
  } catch (error) {
    console.error("FULL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;