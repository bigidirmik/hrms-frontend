import axios from "axios";

export default class ResumeService{

    add(values){
        return axios.post("http://localhost:8080/api/resumes/add",values)
    }

    update(values){
        return axios.put("http://localhost:8080/api/resumes/update",values)
    }

    delete(values){
        return axios.delete("http://localhost:8080/api/resumes/delete",values)
    }

    getResumes(){
        return axios.get("http://localhost:8080/api/resumes/getAll")
    }

    getResumeById(resumeId){
        return axios.get("http://localhost:8080/api/resumes/findById?=" + resumeId)
    }

    getResumeByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/resumes/getByCandidateId?candidateId=" + candidateId)
    }

}