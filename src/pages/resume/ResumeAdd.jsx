import { Form, Formik } from "formik";
import React from "react";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import MyInput from "../../utilities/customFormControls/MyInput";
import MySelect from "../../utilities/customFormControls/MySelect";
import MyTextArea from "../../utilities/customFormControls/MyTextArea";

export default function ResumeAdd() {

  const initialValues = {
    candidate: "",

    image: "",
    networks: {
      networkName: "",
      networkUrl: "",
    },

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
    networkName: Yup.string().lowercase("yalnızca küçük harf"),

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
          <strong>coverLetter</strong>
          <MyTextArea name="coverLetter" placeholder="coverLetter" />

          <strong>languages</strong>
          <MySelect name="languages" placeholder="languages" />

          <strong>educations</strong>
          <MyInput name="educations" placeholder="educations" />

          <strong>skills</strong>
          <MyInput name="skills" placeholder="skills" />

          <strong>workExperiences</strong>
          <MyInput name="workExperiences" placeholder="workExperiences..." />

          <strong>Ağlar</strong>
          <MyInput name="networkName" placeholder="küçük harflerle ağ ismi" />
          <MyInput name="networkUrl" placeholder="Ağ Profil Linki" />

          <Button primary type="submit">
            CV EKLE
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
