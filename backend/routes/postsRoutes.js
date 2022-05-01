const express = require("express");
const router = express.Router();
const { getAllPosts, getPostById, updatePost, deletePost, createPost } = require("../controllers/blogsController");

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
router.post("/", createPost);

module.exports = router;