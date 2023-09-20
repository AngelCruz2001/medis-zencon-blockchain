import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  birthDay: {
    type: Date,
  },
  dateDeath: {
    type: Date,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  wallet: {
    type: String,
  },
  role: {
    type: String,
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
  parents: {
    padre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    madre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  sons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  conyuge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  illnesses: {
    type: String,
  },
  allergies: {
    type: String,
  },
  chronicIllnesses: {
    type: String,
  },
  recurrentMedications: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
