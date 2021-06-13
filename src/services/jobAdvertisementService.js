import axios from "axios";

export default class JobAdvertisementService{

    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/job-advertisements/getAll")
    }

    getJobAdvertisementsAsc(){
        return axios.get("http://localhost:8080/api/job-advertisements/getAllAsc")
    }

    getJobAdvertisementsByPage(){
        return axios.get("http://localhost:8080/api/job-advertisements/getAllByPage")
    }

    getJobAdvertisementsByIsActive(){
        return axios.get("http://localhost:8080/api/job-advertisements/getByIsActive")
    }

    getJobAdvertisementsByIsActiveAndApplicationDeadline(){
        return axios.get("http://localhost:8080/api/job-advertisements/getByIsActiveAndApplicationDeadline")
    }

    getJobAdvertisementsByIsActiveAndEmployerId(){
        return axios.get("http://localhost:8080/api/job-advertisements/getByIsActiveAndEmployerId")
    }

    getJobAdvertisementsByQueryActiveAndAppDeadlineAsc(){
        return axios.get("http://localhost:8080/api/job-advertisements/getByQueryActiveAndAppDeadlineAsc")
    }

}