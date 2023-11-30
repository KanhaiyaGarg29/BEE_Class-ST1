const Post=require("../models/post");

exports.createPost=async(req,res)=>{
    try{
        const{title,content,author}=req.body;

        const post=new Post({
            title,content,author
          });
          const savePost=await post.save();
      res.json({
        post:savePost,
      });
    }catch(error){
        return res.status(400).json({
            err:"create post error"
           })
    }
}


exports.getAllPosts=async(req,res)=>{
    try{
       const posts=await Post.find()
       res.json({
        posts
       })
    }
    catch(error){
        return res.status(400).json({
            err:"get post error"
           })
    }
}

exports.getPostById=async(req,res)=>{
    try{
        const{id}=req.params;
       const post=await Post.findById({_id:id})
       res.json({
        post
       })
    }
    catch(error){
        return res.status(400).json({
            err:"cannot get post error"
           })
    }
}

exports.updatePost=async(req,res)=>{
    try{
        const id=req.params.id;
       const post=await Post.findByIdAndUpdate({_id:id},req.body,{new:true})
       ;
       const updatedPost=await Post.findById({_id:id});
       res.json({
        post,
        updatedPost
       })
    }
    catch(error){
        return res.status(400).json({
            err:"cannot update post "+error
           })
    }
}


exports.deletePost=async(req,res)=>{
    try{
        const{id}=req.params;
        const student=await Post.findByIdAndDelete({_id:id});
        if(!student){
            res.status(404).json({
                success:false,
                message:"Data not present"
            })
        }
        res.status(200).json({
            success:true,
            message:"Data deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}