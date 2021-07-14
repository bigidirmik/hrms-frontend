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


    getEmployerById(){
        return axios.get("http://localhost:8080/api/employers/findById")
    }

    getEmployerByEmail(){
        return axios.get("http://localhost:8080/api/employers/findByEmail")
    }

}