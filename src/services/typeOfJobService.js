import axios from "axios";

export default class TypeOfJobService{

    getTypesOfJob(){
        return axios.get("http://localhost:8080/api/types-of-job/getAll")
    }

}