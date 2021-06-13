import axios from "axios";

export default class WorkExperienceService{

    getWorkExperiencesByCandidateIdOrderByEndDateDesc(){
        return axios.get("http://localhost:8080/api/work-experiences/getAllByCandidateIdOrderByEndDateDesc")
    }

}