import mongoose from "mongoose";
export const Connection = async () => {
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/jobform" , )
        console.log("Database Connected Successfully")
    }catch(e){
        console.log(e.message)
    }
}