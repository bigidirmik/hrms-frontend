import axios from "axios";

export default class SkillService{

    getSkillsByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/skills/getAllByCandidateId?candidateId="+candidateId)
    }

}