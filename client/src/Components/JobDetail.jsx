const JobDetail = ({selectJob}) => {
    return (
        <div>
        <h1 className="mt-4 mb-2">{selectJob.title}</h1>
        <div className="card">
            <div className="card-body">
                <h5>{selectJob.location}</h5>
                <p>{selectJob.description}</p>
            </div>
        </div>
        </div>
    )
}
export default JobDetail