import axios from "axios";

export default class NetworkService{

    getNetWorksByCandidateId(){
        return axios.get("http://localhost:8080/api/networks/getAllByCandidateId")
    }

}