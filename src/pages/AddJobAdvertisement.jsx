import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";
import WorkingTimeService from "../services/workingTimeService";
import TypeOfJobService from "../services/typeOfJobService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { useHistory } from "react-router-dom";

export default function AddJobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();

  const AddJobAdvSchema = Yup.object().shape({
    appDeadLine: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobTitleId: Yup.number().required("Bu alanın doldurulması zorunludur"),
    workingTimeId: Yup.number().required("Bu alanın doldurulması zorunludur"),
    typeOfJobId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    positionQuota: Yup.number().required("Posizyon sayısı zorunludur").min(1, "Posizyon kotası 1'den küçük olamaz"),
    cityId: Yup.number().required("Bu alanın doldurulması zorunludur"),
    salaryMin: Yup.number().min(0, "0 Dan az olamaz").required("Bu alan zorunludur"),
    salaryMax: Yup.number().min(0, "0 Dan az olamaz").required("Bu alan zorunludur"),
  });

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      description: "",
      jobTitleId: "",
      workingTimeId: "",
      typeOfJobId: "",
      positionQuota: "",
      cityId: "",
      salaryMin: "",
      salaryMax: "",
      appDeadLine: "",
    },
    validationSchema: AddJobAdvSchema,
    onSubmit: (values) => {
      values.employerId = 6;
      jobAdvertisementService.add(values).then((result) => console.log(result.data.data));
      alert("İş ilanı eklendi, personelin onayı ardından listelenecektir");
      history.push("/job-advertisements");
    },
  });

  const [workingTimes, setWorkingTimes] = useState([]);
  const [typesOfJob, setTypesOfJob] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let workingTimeService = new WorkingTimeService();
    let typeOfJobService = new TypeOfJobService();
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();

    workingTimeService.getWorkingTimes().then((result) => setWorkingTimes(result.data.data));
    typeOfJobService.getTypesOfJob().then((result) => setTypesOfJob(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data));
  }, []);

  const workingTimeOption = workingTimes.map((workingTime, index) => ({
    key: index,
    text: workingTime.workingTime,
    value: workingTime.id,
  }));

  const typeOfJobOption = typesOfJob.map((typeOfJob, index) => ({
    key: index,
    text: typeOfJob.typeOfJob,
    value: typeOfJob.id,
  }));

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  
  const jobTitleOption = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.title,
    value: jobTitle.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div className="container">
      <Card fluid className="cardstyle">
        <Card.Content header="İş ilanı Ekle" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>


            <Form.Field style={{ marginBottom: "1rem" }}>
              <label>İş Posisyonu</label>

              <Dropdown clearable item placeholder="İş pozisyonu" search selection id="jobtitleId"
                onChange={(event, data) => handleChangeSemantic(data.value, "jobTitleId")}
                onBlur={formik.onBlur}
                value={formik.values.jobTitleId}
                options={jobTitleOption}/>

              {formik.errors.jobTitleId && formik.touched.jobTitleId && (
                <div className={"ui pointing red basic label"}>{formik.errors.jobTitleId}</div>
              )}
            </Form.Field>



            <Form.Field>
              <label>Şehir</label>

              <Dropdown clearable item placeholder="Şehir" search selection id="cityId"
                onChange={(event, data) => handleChangeSemantic(data.value, "cityId")}
                onBlur={formik.onBlur}
                value={formik.values.cityId}
                options={cityOption}/>

              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>{formik.errors.cityId}</div>
              )}
            </Form.Field>



            <Form.Field>
              <label>Çalışma yeri</label>
              
              <Dropdown clearable item placeholder="Çalışma yeri" search selection id="typeOfJobId"
                onChange={(event, data) => handleChangeSemantic(data.value, "typeOfJobId")}
                onBlur={formik.onBlur}
                value={formik.values.typeOfJobId}
                options={typeOfJobOption}/>

              {formik.errors.typeOfJobId && formik.touched.typeOfJobId && (
                <div className={"ui pointing red basic label"}>{formik.errors.typeOfJobId}</div>
              )}
            </Form.Field>



            <Form.Field>
              <label>Çalışma Süresi</label>

              <Dropdown clearable item placeholder="Çalışma Süresi" search selection id="workingTimeId"
                onChange={(event, data) => handleChangeSemantic(data.value, "workingTimeId")}
                onBlur={formik.onBlur}
                value={formik.values.workingTimeId}
                options={workingTimeOption}/>

              {formik.errors.workingTimeId && formik.touched.workingTimeId && (
                <div className={"ui pointing red basic label"}>{formik.errors.workingTimeId}</div>
              )}
            </Form.Field>



            <Form.Field>
              <Grid stackable>

                <Grid.Column width={8}>

                  <label style={{ fontWeight: "bold" }}>
                    Maaş aralığı MİNİMUM
                  </label>

                  <Input style={{ width: "100%" }} type="number" placeholder="Maaş aralığı MİNİMUM" name="salaryMin"
                    value={formik.values.salaryMin}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>

                  {formik.errors.salaryMin && formik.touched.salaryMin && (
                    <div className={"ui pointing red basic label"}>{formik.errors.salaryMin}</div>
                  )}
                </Grid.Column>


                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Maaş aralığı MAKSİMUM
                  </label>

                  <Input style={{ width: "100%" }} type="number" placeholder="Maaş aralığı MAKSİMUM" name="salaryMax"
                    value={formik.values.salaryMax}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>

                  {formik.errors.salaryMax && formik.touched.salaryMax && (
                    <div className={"ui pointing red basic label"}>{formik.errors.salaryMax}</div>
                  )}
                </Grid.Column>

              </Grid>
            </Form.Field>



            <Form.Field>
              <Grid stackable>

                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Açık Posisyon sayısı
                  </label>

                  <Input style={{ width: "100%" }} id="positionQuota" name="positionQuota" placeholder="Açık Posisyon sayısı"
                    type="number"
                    error={Boolean(formik.errors.positionQuota)}
                    onChange={formik.handleChange}
                    value={formik.values.positionQuota}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.positionQuota &&
                    formik.touched.positionQuota && (
                      <div className={"ui pointing red basic label"}>{formik.errors.positionQuota}</div>
                    )}
                </Grid.Column>


                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Son başvuru tarihi
                  </label>

                  <Input style={{ width: "100%" }} type="date" name="appDeadLine" placeholder="Son başvuru tarihi"
                    error={Boolean(formik.errors.appDeadLine)}
                    onChange={(event, data) => handleChangeSemantic(data.value, "appDeadLine")}
                    value={formik.values.appDeadLine}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.appDeadLine && formik.touched.appDeadLine && (
                    <div className={"ui pointing red basic label"}>{formik.errors.appDeadLine}</div>
                  )}
                </Grid.Column>

              </Grid>
            </Form.Field>



            <Form.Field>
              <label>Açıklama</label>
              <TextArea placeholder="Açıklama" style={{ minHeight: 100 }} name="description"
                error={Boolean(formik.errors.description).toString()}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <div className={"ui pointing red basic label"}>{formik.errors.description}</div>
              )}
            </Form.Field>


            <Button type="submit" content="Ekle" labelPosition="right" icon="add" positive style={{ marginLeft: "20px" }}/>

          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
