import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
    //
  },
  addressLine1: {
    type: String,
    //
  },
  addressLine2: {
    type: String,
  },
  zipCode: {
    type: Number,
    //
  },
  city: {
    type: String,
    //
  },
  country: {
    type: String,
    //
  },
  phoneNumber: {
    type: String,
    //
  },
  email: {
    type: String,
    //
  },
  password: {
    type: String,
    //
  },
  wallet: {
    type: String,
    //
  },
  role: {
    type: String,
    //
  },
  status: {
    type: String,
    default: "Healthy",
  },
  lat: {
    type: String,
  },
  lng: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
