import axios from "axios";

export default class SystemPersonnelService{

    getSystemPersonnel(){
        return axios.get("http://localhost:8080/api/system-personnel/getAll")
    }

    getSystemPersonnelAsc(){
        return axios.get("http://localhost:8080/api/system-personnel/getAllAsc")
    }

    getSystemPersonnelByPage(){
        return axios.get("http://localhost:8080/api/system-personnel/getAllByPage")
    }


    getSystemPersonnelById(systemPersonnelId){
        return axios.get("http://localhost:8080/api/system-personnel/findById?systemPersonnelId="+systemPersonnelId)
    }

    getSystemPersonnelByEmail(email){
        return axios.get("http://localhost:8080/api/system-personnel/findByEmail?email="+email)
    }

}