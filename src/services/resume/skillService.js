import axios from "axios";

export default class SkillService{

    getSkillsByCandidateId(){
        return axios.get("http://localhost:8080/api/skills/getAllByCandidateId")
    }

}