import axios from "axios";

export default class EducationService{

    getEducationsByCandidateIdOrderByEndDateDesc(){
        return axios.get("http://localhost:8080/api/educations/getAllByCandidateIdOrderByEndDateDesc")
    }

}