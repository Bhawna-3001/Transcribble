import mongoose from "mongoose";

export const connectDb = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Transcribble");
        console.log("database connected");
    }catch(error){
        console.log(error);
    }
}