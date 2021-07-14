import axios from "axios";

export default class ImageService{

    getImageById(){
        return axios.get("http://localhost:8080/api/images/getById")
    }

    getImageByCandidateId(){
        return axios.get("http://localhost:8080/api/images/getByCandidateId")
    }

    getImageByEmployerId(){
        return axios.get("http://localhost:8080/api/images/getByEmployerId")
    }

}