import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import CandidateService from "../services/Candidate/candidateService"
import {login} from "../store/actions/candidateActions"
import { toast } from "react-toastify";

export default function Login(signIn) {

  const [candidate, setCandidate] = useState([])

  const dispatch = useDispatch()

  let history = useHistory();

  function handleLogin(values) {
    let candidateService = new CandidateService();
    candidateService.getCandidateByEmail(values.email).then(result=>setCandidate(result.data.data))
    console.log("handleLogin: " + candidate)
    //dispatch(login({candidate}))
    //toast.success(`Hoşgeldin ${candidate.firstName}`)
    //history.push("/")
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
          console.log("onSubmit: " + values.email);
          handleLogin(values);
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
              onClick={handleLogin(values)}
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
