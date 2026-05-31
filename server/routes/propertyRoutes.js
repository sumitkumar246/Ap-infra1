import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  getPropertiesByUser,
  addReview,
  getFeaturedProperties,
  searchProperties,
} from "../controllers/propertyController.js";

const router = express.Router();


// PUBLIC ROUTES
router.get("/", getAllProperties);

router.get("/featured", getFeaturedProperties);

router.get("/search", searchProperties);

router.get("/user/:userId", getPropertiesByUser);


// SINGLE PROPERTY
router.get("/:id", getPropertyById);


// PROTECTED ROUTES
router.post("/", authMiddleware, createProperty);

router.put("/:id", authMiddleware, updateProperty);

router.delete("/:id", authMiddleware, deleteProperty);

router.post("/:id/review", authMiddleware, addReview);

export default router;