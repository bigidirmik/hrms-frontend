import React from "react";
import { useSelector } from "react-redux";
import PersonnelProfile from "./personnel/PersonnelProfile"
import CandidateProfile from "./candidate/CandidateProfile";
import EmployerProfile from "./employer/EmployerProfile";

export default function UserProfile() {
  const { userInitials } = useSelector((state) => state.user);

  let user = userInitials[0].user

  function handleProfile() {
      if(user.admin){
          return <PersonnelProfile />
      }else if (user.firstName) {
          return <CandidateProfile />
      }
      else {
          return <EmployerProfile />
      }
  }

  return (
    <div>{handleProfile()}</div>
  );
}
