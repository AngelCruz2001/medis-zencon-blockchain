import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    let uri: string = process.env.MONGODB_URL || "";
    mongoose.connect(uri);
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
};

export default connectMongoDB