import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, Image } from "semantic-ui-react";
import MyInput from "../../utilities/customFormControls/MyInput";
import { useHistory } from "react-router-dom";
import CandidateService from "../../services/candidate/candidateService";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/userActions";

export default function CandidateRegister() {

  const {userInitials} = useSelector(state => state.user)

  const dispatch = useDispatch();

  let history = useHistory();

  const initialValues = {
    id: userInitials[0].user.id,
    firstName: userInitials[0].user.firstName,
    lastName: userInitials[0].user.lastName,
    birthOfDate: userInitials[0].user.birthOfDate,
    nationalityId: userInitials[0].user.nationalityId,
    email: userInitials[0].user.email,
    password: "",
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

  function handleUpdate(values) {
    history.push("/login");
    let candidateService = new CandidateService();
    candidateService.update(values).then(toast.success(`Güncelleme başarılı: ${values.firstName}!`));
    dispatch(logout(values))
  }

  return (
    <div style={{ width: "25%", margin: "auto" }}>
      <Image
          src={
            userInitials[0].user.image == null
            ? "https://res.cloudinary.com/dwsq1lxha/image/upload/v1625941172/115-1150456_avatar-generic-avatar_fhhfkx.jpg"
            : userInitials[0].user.image.url
          }
          wrapped
          ui={true}
        />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values)
          handleUpdate(values)
        }}
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
          <MyInput
            name="confirmPassword"
            placeholder="Şifre Tekrarı"
            type="password"
          />
          <Button primary type="submit">
            Güncelle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}