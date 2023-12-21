import saveData from "../services/api"
import InputField from "./InputField"
import { useState } from "react"


const JobForm = ({setBlock , setSelectJob}) => {
    const [formData , setFormData] = useState({
        title:"",
        company:"",
        location:"",
        description:""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        const res = await saveData(formData)
        alert(res.data.message)
        setBlock(false)
        setSelectJob(null)
       
      
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
           
        })
 
    }
    return (
        <>
        <h1>Add a Job Listing</h1>
        <form onSubmit={handleSubmit}>
        <InputField title = "Job Title" onChange = {handleChange} value={formData.title} name = "title"/>
        <InputField title = "Company" onChange = {handleChange} value={formData.company} name = "company"/>
        <InputField title = "Location" onChange = {handleChange} value={formData.location} name = "location"/>
        <InputField title = "Description" onChange = {handleChange} value={formData.description} name = "description"/>
        <button className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}
export default JobForm
