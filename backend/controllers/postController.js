const postModel = require("../models/postModel");

// GET ALL PostS
exports.getAllPostController = async(req, res) => {
    try {
        const posts = await postModel.find({});
        if (!posts) {
            return res.status(200).send({
                message: "No post Found",
                success: false,
            });
        }

        return res.status(200).send({
            success: true,
            count: posts.length,
            message: "All post List",
            posts,
        });
    } catch (error) {
        return res.status(500).send({
            message: "Error in Get All post",
            error: error,
            success: false,
        });
    }
};

// Create post
exports.createPostController = async(req, res) => {
    try {
        const { title, description, image } = req.body;
        if (!title || !description || !image) {
            return res.status(400).send({
                message: "Provide All Details",
                success: false,
            });
        }
        const newPost = new postModel({ title, description, image });
        await newPost.save();
        return res.status(201).send({
            message: "Post Created!",
            success: true,
            newPost,
        });
    } catch (error) {
        return res.status(400).send({
            message: "Error While creating Post",
            error: error,
            success: false,
        });
    }
};

// Get Single Post
exports.getPostByIdController = async(req, res) => {
    try {
        const { id } = req.params;
        const post = await postModel.findById(id);
        if (!post) {
            return res.status(404).send({
                message: "Post not found",
                success: false,
            });
        }

        return res.status(200).send({
            success: true,
            message: "single Post found",
            post,
        });
    } catch (error) {
        return res.status(500).send({
            message: "Error while getting single Post",
            error: error,
            success: false,
        });
    }
};

// Update Post
exports.updatePostController = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image } = req.body;
        const post = await postModel.findByIdAndUpdate(
            id, {...req.body }, { new: true }
        );
        return res.status(200).send({
            message: "Post Updated",
            success: true,
            post,
        });
    } catch (error) {
        return res.status(400).send({
            message: "Error while Updating Post",
            error: error,
            success: false,
        });
    }
};

// Delete Post
exports.deletePostController = async(req, res) => {
    try {
        await postModel.findOneAndDelete(req.params.id);
        return res.status(200).send({
            message: "Post deleted successfully",
            success: true,
        });
    } catch (error) {
        return res.status(400).send({
            message: "Error while deleting a Post",
            error: error,
            success: false,
        });
    }
};