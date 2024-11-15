import mongoose from "mongoose";

// creating connectDB function
const connectDB =async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;