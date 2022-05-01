const Post = require("../models/Post.js");
const { postSchema }  = require("../validations/postValidation.js");

const getAllPosts = async (req, res) => {
   try{
      const posts = await Post.find();
      res.status(200).json(posts);
   } catch(err){
       res.status(500).json(err.message);
   }
}

const getAllPostsAsArray = async (req, res) => {
    try{
       const posts = await Post.find();
       return posts;
    } catch(err){
        console.log(err.message);
    }
}

const getPostById = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    } catch(err){
        res.status(500).json(err.message);
    }
}

const createPost = async (req, res) => {

    const { title, description, picture, author } = req.body;

    try{
      const isPostDataValid = await postSchema.validate(req.body);

      if(!isPostDataValid){
         return res.status(400).json("Invalid post data!");
      }

      const isPostFound = await Post.findOne({ title: title });

      if(isPostFound){
         return res.status(400).json("Post with this title already exist!");
      }

      const newPost = new Post({
          title,
          description,
          picture,
          author
      })

      await newPost.save();

      res.status(200).json({
          message: "Successfully created post!",
          post: newPost
      })


    } catch(err){
        res.status(500).json(err.message);
    }
}

const deletePost = async (req, res) => {
    try{
       const deletedPost = await Post.findByIdAndDelete(req.params.id);
       res.status(200).json({
           message: "Succesfully deleted post!",
           post: deletedPost
       }) 
    } catch(err){
        res.status(500).json(err.message);
    }
}

const updatePost = async (req, res) => {
    try{
       const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body );
       res.status(200).json({
           message: "Successfully updated post!",
           post: updatedPost
       })
    } catch(err){
        res.status(500).json(err.message);
    }
}

module.exports = { 
    getAllPosts,
    getAllPostsAsArray,
    getPostById,
    createPost,
    updatePost,
    deletePost
 }