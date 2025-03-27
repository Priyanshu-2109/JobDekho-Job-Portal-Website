import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database Connected'));

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        process.exit(1); // Exit the application if the database connection fails
    }
};

export default connectDB;
