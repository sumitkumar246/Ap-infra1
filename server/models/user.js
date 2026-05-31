import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    phone: {
      type: String,
    },

    role: {
      type: String,
      enum: ["buyer", "seller", "admin"],
      default: "buyer",
    },

    profileImage: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    properties: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],

    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },

  { timestamps: true }
);


// HASH PASSWORD
userSchema.pre("save", async function (next) {

  if (!this.isModified("password")) {
    return next();
  }

  try {

    const salt = await bcryptjs.genSalt(10);

    this.password = await bcryptjs.hash(this.password, salt);

    next();

  } catch (error) {

    next(error);

  }
});


// COMPARE PASSWORD
userSchema.methods.comparePassword = async function (enteredPassword) {

  return await bcryptjs.compare(
    enteredPassword,
    this.password
  );
};


const User = mongoose.model("User", userSchema);

export default User;