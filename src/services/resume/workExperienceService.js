import axios from "axios";

export default class WorkExperienceService{

    getWorkExperiencesByCandidateIdOrderByEndDateDesc(candidateId){
        return axios.get("http://localhost:8080/api/work-experiences/getAllByCandidateIdOrderByEndDateDesc?candidateId="+candidateId)
    }

}