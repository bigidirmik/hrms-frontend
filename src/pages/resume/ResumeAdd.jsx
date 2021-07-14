import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import MyInput from "../../utilities/customFormControls/MyInput";
import MySelect from "../../utilities/customFormControls/MySelect";
import MyTextArea from "../../utilities/customFormControls/MyTextArea"

export default function ResumeAdd() {
  const initialValues = {
    candidate: "",

    image: "",
    networks: "",

    coverLetter: "",

    firstName: "",
    lastName: "",
    nationalityId: "",
    birthOfDate: "",

    educations: "",
    languages: "",
    skills: "",
    workExperiences: "",
  };

  const schema = Yup.object({
    networks: Yup.string(),

    coverLetter: Yup.string().required("Alan zorunlu!"),
    firstName: Yup.string().required("Alan zorunlu!"),
    lastName: Yup.string().required("Alan zorunlu!"),
    nationalityId: Yup.number().required("Alan zorunlu!").max(11),
    birthOfDate: Yup.string().required("Alan zorunlu!"),

    educations: Yup.string(),
    skills: Yup.string(),
    workExperiences: Yup.string(),
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
          <strong>Profil Fotoğrafı</strong>
          <MyInput />
          <strong>firstName</strong>
          <MyInput name="firstName" placeholder="firstName" />
          <strong>lastName</strong>
          <MyInput name="lastName" placeholder="lastName" />
          <strong>nationalityId</strong>
          <MyInput name="nationalityId" placeholder="nationalityId" type="number" />
          <strong>birthOfDate</strong>
          <MyInput name="birthOfDate" placeholder="birthOfDate" type="date" />
          <strong>Ağlar</strong>
          <MyInput name="networks" placeholder="Ağ Profil Linki" />
          <strong>coverLetter</strong>
          <MyTextArea name="coverLetter" placeholder="coverLetter" />
          <strong>languages</strong>
          <MySelect name="languages" placeholder="languages" type="number" />
          <strong>educations</strong>
          <MyInput name="educations" placeholder="educations" />
          <strong>skills</strong>
          <MyInput name="skills" placeholder="skills" />
          <strong>workExperiences</strong>
          <MyInput name="workExperiences" placeholder="workExperiences..." />
        </Form>
      </Formik>
    </div>
  );
}
