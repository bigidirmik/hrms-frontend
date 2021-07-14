import React from 'react'
import { Button } from 'semantic-ui-react';
import MyInput from '../../utilities/customFormControls/MyInput';
import * as Yup from "yup"
import { Formik, Form } from 'formik';

export default function EmployerRegister() {
    const initialValues = {
        companyName: "",
        phoneNumber: "",
        webAdress: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const schema = Yup.object({
        companyName: Yup.string().required("Şirket adı zorunludur!"),
        phoneNumber: Yup.number().required("Telefon numarası zorunludur!"),
        webAdress: Yup.string().required("Web adresi zorunludur!"),
        email: Yup.string().email("Email formatı hatalı!").required("Email adresi zorunludur!"),
        password: Yup.string().required("Şifre zorunludur!").min(6),
        confirmPassword: Yup.string().required("Şifre tekrarı zorunludur!").oneOf([Yup.ref("password")]),
      });

    return (
        <div style={{ width: "25%", margin: "auto" }}>
      <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values)=>{console.log(values)}}
      >
        <Form className="ui form">
            <strong>Şirket Adı</strong>
            <MyInput name="companyName" placeholder="Şirket Adı" />
            <strong>Telefon No:</strong>
            <MyInput name="phoneNumber" placeholder="Telefon No:" />
            <strong>Web Adresi</strong>
            <MyInput name="webAdress" placeholder="Web Adresi" />
            <strong>E-posta</strong>
            <MyInput name="email" placeholder="E-posta" type="email" />
            <strong>Şifre</strong>
            <MyInput name="password" placeholder="Şifre" type="password" />
            <strong>Şifre Tekrarı</strong>
            <MyInput name="confirmPassword" placeholder="Şifre Tekrarı" type="password" />
            <Button primary type="submit">Kayıt Ol</Button>
        </Form>
      </Formik>
    </div>
    )
}