import axios from "axios";

export default class LanguageService{

    getLanguagesByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/languages/getAllByCandidateId?candidateId="+candidateId)
    }

    getLanguages(){
        return axios.get("http://localhost:8080/api/languages/getAll")
    }

}