const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

// router object
const router = express.Router();

// GET ALL BLOGS || GET
router.get("/all-blog", getAllBlogsController);

// CREATE BLOG || POST
router.post("/create-post", createBlogController);

// UPDATE BLOG || POST
router.get("/update-blog/:id", updateBlogController);

module.exports = router;
