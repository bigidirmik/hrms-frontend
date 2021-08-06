import axios from "axios";

export default class ImageService{

    getImageById(imageId){
        return axios.get("http://localhost:8080/api/images/getById?imageId=" + imageId)
    }

    getImageByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/images/getByCandidateId?candidateId=" + candidateId)
    }

    getImageByEmployerId(employerId){
        return axios.get("http://localhost:8080/api/images/getByEmployerId?employerId=" + employerId)
    }

}