const Post=require("../models/post");
const Comment=require("../models/comment");

exports.createComment=async(req,res)=>{
    try{
      //fetch data from request
      const post=req.params.postId;
      const{content,author}=req.body
 
      const comment=new Comment({
        content,author
      })

      const saveComment=await comment.save();
      
     
     const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}},{new:true})
     .populate("comments") 
     .exec();

     res.json({
        post:updatedPost
     })

    }
    catch(error){
       res.status(500).json({
        err:"error while creating comment"+error
       })
    }
}


exports.getComment=async(req,res)=>{
    try{
      //fetch data from request
      const post=req.params.postId;
      
      
      const comments=await Comment.find({ postId: post });

     res.json({
        data:comments
     })

    }
    catch(error){
       res.status(500).json({
        err:"error while getting comment"+error
       })
    }
}

