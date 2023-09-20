import mongoose from "mongoose";

const pharmacySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    addressLine1: {
        type: String,
    },
    addressLine2: {
        type: String,
    },
    zipCode: {
        type: Number,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    lat: {
        type: String,
    },
    lng: {
        type: String,
    },
});

const Pharmacy = mongoose.models.Pharmacy || mongoose.model("Pharmacy", pharmacySchema);

export default Pharmacy;
