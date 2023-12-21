import React, { useEffect, useState } from "react";
import JobForm from "./Components/JobForm";
import { getJobData } from "./services/api";
import JobList from "./Components/JobLIst";
import JobDetail from "./Components/JobDetail";
const App = () => {
  const [block , setBlock] = useState(false)
  const [jobs , setJobs] = useState([])
  const [selectJob , setSelectJob] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const res = await getJobData()
      setJobs(res.data)
      console.log(res)
    }
    getData()
  },[])
 return (
  <>
  <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-12">
            <h1 className="mb-4">Job Form</h1>
            <button className="btn btn-primary" onClick={() => {
              setBlock(prevState => !prevState)
               setSelectJob(null)
               }}
              >{block ? "Hide Job Form" : "Show Job Form"}</button>
            {
              block && <JobForm setBlock = {setBlock} setSelectJob = {setSelectJob}/>
            }{
              !block && <JobList jobs = {jobs} setSelectJob = {setSelectJob}/>
            }
            
          </div>
          <div className="col-md-8">
            {selectJob && <JobDetail selectJob = {selectJob}/>}
          </div>
        </div>
      </div>
  </div>
  </>
 )
}
export default App;
