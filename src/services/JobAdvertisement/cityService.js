import axios from "axios";

export default class CityService{

    getCities(){
        return axios.get("http://localhost:8080/api/cities/getAll")
    }

    getCitiesAsc(){
        return axios.get("http://localhost:8080/api/cities/getAllAsc")
    }

    getCitiesByPage(){
        return axios.get("http://localhost:8080/api/cities/getAllByPage")
    }


    getCityById(cityId){
        return axios.get("http://localhost:8080/api/cities/findById?cityId=" + cityId)
    }

    getCityByName(cityName){
        return axios.get("http://localhost:8080/api/cities/findByCityName?cityName=" + cityName)
    }

}