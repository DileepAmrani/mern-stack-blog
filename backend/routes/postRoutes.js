const express = require("express");
const {
    getAllPostController,
    createPostController,
    getPostByIdController,
    updatePostController,
    deletePostController,
    userPostController
} = require("../controllers/postController");

// router object
const router = express.Router();

// GET ALL POSTS || GET
router.get("/all-post", getAllPostController);

// CREATE POST || POST
router.post("/create-post", createPostController);

// GET SINGLE POST || GET
router.get("/get-post/:id", getPostByIdController);

// UPDATE POST || PUT
router.put("/update-post/:id", updatePostController);

// DELETE POST || DELETE
router.delete("/delete-post/:id", deletePostController);

// User POSTS || GET
router.get("/user-post/:id", userPostController);


module.exports = router;