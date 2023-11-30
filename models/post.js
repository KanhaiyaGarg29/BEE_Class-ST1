const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        maxLength:255
    },
    content:{
        type:String,
        required:true,
        maxLength:5000
    },
    author:{
        type:String,
        required:true,
    },
    
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    }]
})

module.exports=mongoose.model("Post",postSchema)