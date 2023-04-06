const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async(db) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `Connected to MongoDB Database ${mongoose.connection.host}`.bgGreen.white
        );
    } catch (error) {
        console.log(`MONGO Connect Error${error}`.bgRed.white);
    }
};

module.exports = connectDB;