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


    getSystemPersonnelById(){
        return axios.get("http://localhost:8080/api/system-personnel/findById")
    }

    getSystemPersonnelByEmail(){
        return axios.get("http://localhost:8080/api/system-personnel/findByEmail")
    }

}