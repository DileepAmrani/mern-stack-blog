const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
}, { timestamps: true });

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;