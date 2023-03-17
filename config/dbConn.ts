import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
  }
};

export default connectDB;
