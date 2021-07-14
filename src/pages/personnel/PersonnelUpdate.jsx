import React from "react";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import MyInput from "../../utilities/customFormControls/MyInput";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";

export default function PersonnelUpdate() {
  const { userInitials } = useSelector((state) => state.user);
  let user = userInitials[0].user;

  // user içinde personnel object olarak geliyor olabilir,
  // bu yüzden initialValues user'ın systemPersonnel'i objesine alınabilir,
  // user nasıl geliyor öğrenmek için user Service ile çek console ile yazdır,
  // aynı şeklide gönderilmeli,
  // güncelleme metodu yazılacak (bi bak put olabilir)
  // hem service ile put hem dispatch ile state'de güncellemek gerekebilir
  // güncellenince history ile profil sayfasına geri atacak

  const initialValues = {
      id: parseInt(""),
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      firstName: "",
      lastName: "",
      nationalityId: "",
      birthOfDate: "",
  }

  const schema = Yup.object({
      email: Yup.string().email().required(),
      oldPassword: Yup.string().required().oneOf([Yup.ref(user.password)]),
      newPassword: Yup.string().required(),
      confirmNewPassword: Yup.string().required().oneOf([Yup.ref("newPassword")]),
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      nationalityId: Yup.string().required(),
      birthOfDate: Yup.string().required(),
  })

  function handleUpdate(values) {
      console.log(values)
  }

  return (
    <div style={{ width: "25%", margin: "auto" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
            handleUpdate(values)
        }}
      >
        <Form className="ui form">
        <strong>Email</strong>
          <MyInput name="email" placeholder={user.email} type="email" />
          <strong>Eski Şifre</strong>
          <MyInput name="oldPassword" placeholder="Eski Şifrenizi Giriniz" type="password" />
          <strong>Yeni Şifre</strong>
          <MyInput name="newPassword" placeholder="Yeni Şifrenizi Giriniz" type="password" />
          <strong>Yeni Şifre Tekrarı</strong>
          <MyInput name="confirmNewPassword" placeholder="Yeni Şifrenizi Tekrar Giriniz" type="password" />
          <strong>İsim</strong>
          <MyInput name="firstName" placeholder={user.firstName} />
          <strong>Soyisim</strong>
          <MyInput name="lastName" placeholder={user.lastName} />
          <strong>TC No</strong>
          <MyInput name="nationalityId" placeholder={user.nationalityId} />
          <strong>Doğum Tarihi</strong>
          <MyInput name="birthOfDate" placeholder={user.birthOfDate} type="date"  />
          <Button primary type="submit"> Güncelle </Button>
        </Form>
      </Formik>
    </div>
  );
}
