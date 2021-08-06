import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisementById(jobAdvertisementId) {
    return axios.get(
      "http://localhost:8080/api/job-advertisements/findById?jobAdvertisementId=" +
        jobAdvertisementId
    );
  }

  getJobAdvertisements() {
    return axios.get("http://localhost:8080/api/job-advertisements/getAll");
  }

  getJobAdvertisementsAsc() {
    return axios.get("http://localhost:8080/api/job-advertisements/getAllAsc");
  }

  getJobAdvertisementsByPage() {
    return axios.get(
      "http://localhost:8080/api/job-advertisements/getAllByPage"
    );
  }

  getJobAdvertisementsByIsActive(isActive) {
    return axios.get(
      "http://localhost:8080/api/job-advertisements/getByIsActive?isActive=" +
        isActive
    );
  }

  getJobAdvertisementsByIsActiveAndApplicationDeadline(
    applicationDeadline,
    isActive
  ) {
    return axios.get(
      "http://localhost:8080/api/job-advertisements/getByIsActiveAndApplicationDeadline?applicationDeadline=" +
        applicationDeadline +
        "&isActive=" +
        isActive
    );
  }

  getJobAdvertisementsByIsActiveAndEmployerId(employerId,isActive) {
    return axios.get(
      "http://localhost:8080/api/job-advertisements/getByIsActiveAndEmployerId?employerId="+employerId+"&isActive="+isActive
    );
  }

  getJobAdvertisementsByEmployerId(employerId) {
    return axios.get(
      "http://localhost:8080/api/job-advertisements/getByEmployerId?employerId=" +
        employerId
    );
  }

  getJobAdvertisementsByQueryActiveAndAppDeadlineAsc(applicationDeadline,isActive) {
    return axios.get(
      "http://localhost:8080/api/job-advertisements/getByQueryActiveAndAppDeadlineAsc?applicationDeadline=" +
      applicationDeadline +
      "&isActive=" +
      isActive
    );
  }

  add(values) {
    return axios.post(
      "http://localhost:8080/api/job-advertisements/add",
      values
    );
  }
}
