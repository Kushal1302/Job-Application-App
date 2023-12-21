import axios from 'axios'
const saveData = async (data) => {
    try {
        console.log(data)
        return await axios.post('http://localhost:8000/save' , data)
        
    } catch (error) {
        console.log("The error is find that is :" , error)
    }
}
export const getJobData = async () => {
    try {
        return await axios.get('http://localhost:8000/data')
       
    } catch (error) {
        console.log(error)
    }
}
export default saveData