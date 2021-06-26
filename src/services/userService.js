import axios from "axios";

export default class UserService{

    getUsers(){
        return axios.get("http://localhost:8080/api/users/getAll")
    }

    getUsersAsc(){
        return axios.get("http://localhost:8080/api/users/getAllAsc")
    }

    getUsersByPage(){
        return axios.get("http://localhost:8080/api/users/getAllByPage")
    }

    getUserByEmail(email){
        return axios.get("http://localhost:8080/api/users/findByEmail?email=" + email)
    }

}