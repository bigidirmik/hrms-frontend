import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import MySelect from "../../utilities/customFormControls/MySelect";
import MyRadio from "../../utilities/customFormControls/MyRadio"
import MyTextArea from "../../utilities/customFormControls/MyTextArea";
import MyInput from "../../utilities/customFormControls/MyInput";

export default function JobAdvertisementAdd() {
  const initialValues = {
    employer: "",

    jobTitle: "",
    city: "",

    typeOfJob: "",
    workingTime: "",
    
    positionQuota: "",
    applicationDeadline: "",
    salaryMin: "",
    salaryMax: "",
    description: "",

    isActive: "",
  };

  const schema = Yup.object({
    jobTitle: Yup.string().required(),

    description: Yup.string().required(),
    salaryMin: Yup.number().required().min(0),
    salaryMax: Yup.number().required().min(0),
    positionQuota: Yup.number().required().min(1),
    applicationDeadline: Yup.string().required(),
    isActive: Yup.boolean().required(),
  });

  return (
    <div style={{ width: "25%", margin: "auto" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <strong>İş Başlığı</strong>
          <MySelect name="jobTitle" placeholder="İş Başlığı Seçiniz" />
          <strong>Şehir</strong>
          <MySelect name="city" placeholder="Şehir Seçiniz" />
          <strong>Çalışma Türü</strong>
          <MyRadio name="typeOfJob" placeholder="Çalışma Türü Seçiniz" />
          <strong>Çalışma Süresi</strong>
          <MyRadio name="workingTime" placeholder="Çalışma Süresi Seçiniz" />
          <strong>Açık Pozisyon Adedi</strong>
          <MyInput name="positionQuota" placeholder="Açık Pozisyon Adedi Giriniz" type="number" />
          <strong>Son Başvuru Tarihi</strong>
          <MyInput name="applicationDeadline" placeholder="Son Başvuru Tarihi Giriniz" type="date" />
          <strong>Ücret</strong>
          <MyInput name="salaryMin" placeholder="Minimum Ücret" type="number" />
          <MyInput name="salaryMax" placeholder="Maximum Ücret" type="number" />
          <strong>Açıklama</strong>
          <MyTextArea name="description" placeholder="Açıklama Ekleyiniz..." />
        </Form>
      </Formik>
    </div>
  );
}
