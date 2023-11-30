const express=require('express');
const router=express.Router();

const{createPost,getAllPosts,getPostById,updatePost,deletePost}=require("../controllers/postController");
const{createComment,getComment}=require("../controllers/commentController")

router.post("/posts",createPost);
router.get("/posts",getAllPosts);
router.get("/posts/:id",getPostById);
router.put("/posts/:id",updatePost);
router.delete("/posts/:id",deletePost);
router.post("/posts/:postId/comments",createComment)
router.get("/posts/:postId/comments",getComment)
module.exports=router;