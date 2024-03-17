import mongoose from 'mongoose';

let connected = false;

// If the database is already connected, then do not connect again
const connectDB = async () => {
  mongoose.set('strictQuery', true);
  if (connected) {
    console.log('MongoDB is already connected');
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    connected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
