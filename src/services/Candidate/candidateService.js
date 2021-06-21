import axios from "axios";

export default class CandidateService{

    registerCandidate(){
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


    getCandidateById(){
        return axios.get("http://localhost:8080/api/candidates/findById")
    }

    getCandidateByEmail(){
        return axios.get("http://localhost:8080/api/candidates/findByEmail")
    }

    getCandidateByNationalityId(){
        return axios.get("http://localhost:8080/api/candidates/findByNationalityId")
    }

}