import axios from "axios";

export default class CoverLetterService{

    getCoverLetterByCandidateId(){
        return axios.get("http://localhost:8080/api/cover-letters/getByCandidateId")
    }

}