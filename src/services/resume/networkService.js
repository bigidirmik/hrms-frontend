import axios from "axios";

export default class NetworkService{

    getNetWorksByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/networks/getAllByCandidateId?candidateId="+candidateId)
    }

}