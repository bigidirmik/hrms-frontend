import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import MyInput from "../../utilities/customFormControls/MyInput";
import { Link, useHistory } from "react-router-dom";
import CandidateService from "../../services/candidate/candidateService";
import { toast } from "react-toastify";

export default function CandidateRegister() {

  let history = useHistory()

  const initialValues = {
    firstName: "",
    lastName: "",
    birthOfDate: "",
    nationalityId: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const schema = Yup.object({
    firstName: Yup.string().required("İsim zorunludur!"),
    lastName: Yup.string().required("Soyisim zorunludur!"),
    birthOfDate: Yup.string().required("Doğum tarihi zorunludur!"),
    nationalityId: Yup.number().required("Kimlik numarası zorunludur!"),
    email: Yup.string().email("Email formatı hatalı!").required("Email adresi zorunludur!"),
    password: Yup.string().required("Şifre zorunludur!").min(6),
    confirmPassword: Yup.string().required("Şifre tekrarı zorunludur!").oneOf([Yup.ref("password")]),
  });

  function handleRegister(values) {
    let candidateService = new CandidateService()
    candidateService.add(values).then(toast.success(`Kayıt başarılı: ${values.firstName}!`))
history.push("/")
  }

  return (
    <div style={{ width: "25%", margin: "auto" }}>
      <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values)=>{handleRegister(values)}}
      >
        <Form className="ui form">
            <strong>İsim</strong>
            <MyInput name="firstName" placeholder="İsim" />
            <strong>Soyisim</strong>
            <MyInput name="lastName" placeholder="Soyisim" />
            <strong>Doğum Tarihi</strong>
            <MyInput name="birthOfDate" placeholder="Doğum Tarihi" type="date" />
            <strong>Kimlik No:</strong>
            <MyInput name="nationalityId" placeholder="Kimlik No:" />
            <strong>E-posta</strong>
            <MyInput name="email" placeholder="E-posta" type="email" />
            <strong>Şifre</strong>
            <MyInput name="password" placeholder="Şifre" type="password" />
            <strong>Şifre Tekrarı</strong>
            <MyInput name="confirmPassword" placeholder="Şifre Tekrarı" type="password" />
            <Button primary type="submit">Kayıt Ol</Button>
            <h4>İşveren olarak <Link to={"/register/employer"}>Kayıt Ol!</Link></h4>
        </Form>
      </Formik>
    </div>
  );
}