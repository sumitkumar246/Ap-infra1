// import Property from "../models/property.js";
// import User from "../models/user.js";

// // Get all properties
// export const getAllProperties = async (req, res) => {
//   try {
//     const { city, propertyType, minPrice, maxPrice, bedrooms } = req.query;

//     let filter = { status: "available" };

//     if (city) filter["location.city"] = city;
//     if (propertyType) filter.propertyType = propertyType;
//     if (minPrice || maxPrice) {
//       filter.price = {};
//       if (minPrice) filter.price.$gte = minPrice;
//       if (maxPrice) filter.price.$lte = maxPrice;
//     }
//     if (bedrooms) filter["features.bedrooms"] = bedrooms;

//     const properties = await Property.find(filter)
//       .populate("owner", "name email phone")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       message: "Properties fetched successfully",
//       count: properties.length,
//       properties,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get single property
// export const getPropertyById = async (req, res) => {
//   try {
//     const property = await Property.findById(req.params.id)
//       .populate("owner", "name email phone bio")
//       .populate("reviews.user", "name profileImage");

//     if (!property) {
//       return res.status(404).json({ message: "Property not found" });
//     }

//     res.status(200).json({
//       message: "Property fetched successfully",
//       property,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create property
// export const createProperty = async (req, res) => {
//   try {
//     const { title, description, price, location, propertyType, features, images } =
//       req.body;

//     if (!title || !description || !price || !location || !propertyType) {
//       return res.status(400).json({ message: "Please provide all required fields" });
//     }

//     const property = new Property({
//       title,
//       description,
//       price,
//       location,
//       propertyType,
//       features,
//       images: images || [],
//       owner: req.user.id,
//     });

//     await property.save();

//     await User.findByIdAndUpdate(req.user.id, {
//       $push: { properties: property._id },
//     });

//     res.status(201).json({
//       message: "Property created successfully",
//       property,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update property
// export const updateProperty = async (req, res) => {
//   try {
//     const property = await Property.findById(req.params.id);

//     if (!property) {
//       return res.status(404).json({ message: "Property not found" });
//     }

//     if (property.owner.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Not authorized to update this property" });
//     }

//     const updatedProperty = await Property.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     res.status(200).json({
//       message: "Property updated successfully",
//       property: updatedProperty,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete property
// export const deleteProperty = async (req, res) => {
//   try {
//     const property = await Property.findById(req.params.id);

//     if (!property) {
//       return res.status(404).json({ message: "Property not found" });
//     }

//     if (property.owner.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Not authorized to delete this property" });
//     }

//     await Property.findByIdAndDelete(req.params.id);

//     await User.findByIdAndUpdate(req.user.id, {
//       $pull: { properties: req.params.id },
//     });

//     res.status(200).json({
//       message: "Property deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get properties by user
// export const getPropertiesByUser = async (req, res) => {
//   try {
//     const properties = await Property.find({ owner: req.params.userId })
//       .populate("owner", "name email phone");

//     res.status(200).json({
//       message: "Properties fetched successfully",
//       count: properties.length,
//       properties,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Add review
// export const addReview = async (req, res) => {
//   try {
//     const { rating, comment } = req.body;

//     const property = await Property.findById(req.params.id);

//     if (!property) {
//       return res.status(404).json({ message: "Property not found" });
//     }

//     const review = {
//       user: req.user.id,
//       rating,
//       comment,
//     };

//     property.reviews.push(review);

//     const totalRating = property.reviews.reduce((sum, r) => sum + r.rating, 0);
//     property.rating = totalRating / property.reviews.length;

//     await property.save();

//     res.status(201).json({
//       message: "Review added successfully",
//       property,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get featured properties
// export const getFeaturedProperties = async (req, res) => {
//   try {
//     const properties = await Property.find({ status: "available", rating: { $gte: 4 } })
//       .populate("owner", "name email phone")
//       .limit(6)
//       .sort({ rating: -1 });

//     res.status(200).json({
//       message: "Featured properties fetched successfully",
//       properties,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Search properties
// export const searchProperties = async (req, res) => {
//   try {
//     const { keyword } = req.query;

//     if (!keyword) {
//       return res.status(400).json({ message: "Please provide a search keyword" });
//     }

//     const properties = await Property.find({
//       $or: [
//         { title: { $regex: keyword, $options: "i" } },
//         { description: { $regex: keyword, $options: "i" } },
//         { "location.city": { $regex: keyword, $options: "i" } },
//       ],
//       status: "available",
//     })
//       .populate("owner", "name email phone")
//       .limit(20);

//     res.status(200).json({
//       message: "Search results fetched successfully",
//       count: properties.length,
//       properties,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
