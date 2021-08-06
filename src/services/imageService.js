import axios from "axios";

export default class ImageService{

    getByUserId(userId){
        return axios.get("http://localhost:8080/api/images/getByUserId?userId=" + userId)
    }

}