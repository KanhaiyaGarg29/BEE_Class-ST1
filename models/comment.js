const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        maxLength:1000
    },
    author:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model("Comments",commentSchema)