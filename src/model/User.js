import mongoose, { mongo } from "mongoose";
const Userschmea =new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    }
    , password:{
        type:String,
        unique:true,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.models.User|| mongoose.model("User", Userschmea
);
