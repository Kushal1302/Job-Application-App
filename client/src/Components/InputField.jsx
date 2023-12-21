const InputField = ({title , onChange , value , name}) => {
    return (
        <>
        <label className="fw-bold">{title}</label>
        <input autoComplete = "off" type="text" className="form-control border-top-0 mb-3" onChange={onChange} value={value} name={name} />
                                                                                                                                                                                                                                                                                                    
        </>
    )
}
export default InputField