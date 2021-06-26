import axios from "axios";

export default class CandidateService{

    add(values){
        return axios.post("http://localhost:8080/api/candidates/add",values)
    }

    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getAll")
    }

    getCandidatesAsc(){
        return axios.get("http://localhost:8080/api/candidates/getAllAsc")
    }

    getCandidatesByPage(){
        return axios.get("http://localhost:8080/api/candidates/getAllByPage")
    }


    getCandidateById(candidateId){
        return axios.get("http://localhost:8080/api/candidates/findById?candidateId=" + candidateId)
    }

    getCandidateByEmail(email){
        return axios.get("http://localhost:8080/api/candidates/findByEmail?email=" + email)
    }

    getCandidateByNationalityId(nationalityId){
        return axios.get("http://localhost:8080/api/candidates/findByNationalityId?nationalityId=" + nationalityId)
    }

}