import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

export default function Login(signIn) {
  let history = useHistory();

  function handleLogin() {
    history.push("/");
  }

  return (
    <div className="login-form">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Email boş bırakılamaz!"),
          password: Yup.string().required("Parola boş bırakılamaz!"),
        })}
        onSubmit={(values) => {
          console.log(values);
          handleLogin();
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          dirty,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <h3>Kullanıcı Girişi</h3>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="input"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <label htmlFor="password">Şifre</label>
            <input
              id="password"
              type="password"
              placeholder="Şifreniz..."
              className="input"
              value={values.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              onClick={signIn}
              disabled={!dirty || isSubmitting}
            >
              Giriş Yap
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
