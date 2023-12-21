import mongoose from "mongoose";
const JobSchema = new mongoose.Schema({
    title:{
        type:String,
        
    },
    company:{
        type:String,
    },
    location:{
        type:String
    },
    description:{
        type:String
    }
})
const Job = mongoose.model("job" , JobSchema)
export default Job