import axios from "axios";

export default class EmployerService{

    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getAll")
    }

    getEmployersAsc(){
        return axios.get("http://localhost:8080/api/employers/getAllAsc")
    }

    getEmployersByPage(){
        return axios.get("http://localhost:8080/api/employers/getAllByPage")
    }


    getEmployerById(employerId){
        return axios.get("http://localhost:8080/api/employers/findById?employerId=" + employerId)
    }

    getEmployerByEmail(email){
        return axios.get("http://localhost:8080/api/employers/findByEmail?email=" + email)
    }

    add(values){
        return axios.post("http://localhost:8080/api/employers/add",values)
    }

    setConfirmationStatus(personnelId,employerId,status){
        return axios.post("http://localhost:8080/api/employers/setConfirmationStatus?"+
        "confirmerSystemPersonnelId="+personnelId+"&employerId="+employerId+"&status="+status)
    }

}