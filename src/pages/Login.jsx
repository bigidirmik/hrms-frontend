import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import MyInput from "../utilities/customFormControls/MyInput";
import UserService from "../services/userService";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    id: parseInt(""),
    email: "",
    password: "",
  };

  const schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  function handleLogin(values) {
    let userService = new UserService();
    userService
      .findByEmail(values.email)
      .then((result) => setUser(result.data.data));
    if (user) {
      let checkPassword = user.password === values.password;
      if (checkPassword) {
        dispatch(login(user));
        toast.success("Giriş Başarılı!");
        history.push("/");
      } else {
        toast.error("Hatalı Şifre");
      }
    }else{toast.error("Hatalı Eposta");}
  }

  return (
    <div style={{ width: "25%", margin: "auto", marginTop: "15%" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        <Form className="ui form">
          <strong>E-posta</strong>
          <MyInput name="email" placeholder="example@example.com" />
          <strong>Parola</strong>
          <MyInput
            name="password"
            placeholder="Parola giriniz"
            type="password"
          />
          <Button primary type="submit">
            Giriş Yap
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
