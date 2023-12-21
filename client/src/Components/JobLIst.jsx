
const JobList = ({jobs , setSelectJob}) => {
    return (
        <>
        <h2>Job Listing</h2>
            
                <ul className="list-group">
                    {
                        jobs.map(job => {
                           return <li className="list-group-item"  key={job._id}>
                            <a href="#" style={{cursor:'pointer'}} className="text-decoration-none" onClick={() => setSelectJob(job)}>{job.title} - {job.company}</a>
                            </li>

                        })
                    }
                </ul>
            
        </>
    )
}
export default JobList