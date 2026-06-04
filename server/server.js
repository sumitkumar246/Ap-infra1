import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", contactRoutes);
app.use("/api", enquiryRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});