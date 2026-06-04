import express from "express";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

router.post("/enquiry", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;