import express from "express";
import Job from "../models/Job.js";
const router = express.Router()
router.post('/save' , async  (req , res) => {
  
    try {
        const jobForm = new Job(req.body)
        await jobForm.save()
        res.send({
            message:"Job saved Success"
        })
    } catch (error) {
        console.log("Error : " , error.message)
    }
    
 })
 router.get('/data' , async(req,res) => {
    try{
        const data = await Job.find()
        res.send(data)
        
    }catch(e){
        console.log(e)
    }
 })

 export default router
