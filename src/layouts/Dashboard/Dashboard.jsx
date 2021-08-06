import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import JobAdvertisementDetail from "../../pages/jobAdvertisement/JobAdvertisementDetail";
import JobAdvertisementList from "../../pages/jobAdvertisement/JobAdvertisementList";
import { ToastContainer } from "react-toastify";
import Login from "../../pages/Login";
import CandidateRegister from "../../pages/candidate/CandidateRegister";
import FavoritesDetail from "../../pages/jobAdvertisement/FavoritesDetail";
import JobAdvertisementAdd from "../../pages/jobAdvertisement/JobAdvertisementAdd";
import EmployerRegister from "../../pages/employer/EmployerRegister";
import ResumeAdd from "../../pages/resume/ResumeAdd";
import UserProfile from "../../pages/UserProfile";
import CandidateList from "../../pages/personnel/CandidateList"
import PersonnelUpdate from "../../pages/personnel/PersonnelUpdate";
import CandidateDetail from "../../pages/candidate/CandidateDetail";
import EmployerList from "../../pages/personnel/EmployerList";
import EmployerJobAds from "../../pages/personnel/EmployerJobAds";
import JobAdvertisementsConfirm from "../../pages/personnel/JobAdvertisementsConfirm"
import CandidateUpdate from "../../pages/candidate/CandidateUpdate";
import Resume from "../../pages/resume/Resume";

export default function Dashboard() {

  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column>

            <Route exact path="/" component={JobAdvertisementList}/>
            <Route exact path="/job-advertisements" component={JobAdvertisementList}/>
            <Route exact path="/job-advertisements/:id" component={JobAdvertisementDetail}/>
            <Route exact path="/job-advertisements-add" component={JobAdvertisementAdd}/>
            <Route exact path="/job-advertisements-confirm" component={JobAdvertisementsConfirm} />

            <Route exact path="/favorites-detail" component={FavoritesDetail}/>

            <Route exact path="/resume" component={Resume} />
            <Route exact path="/resume-add" component={ResumeAdd} />

            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile/user/:id" component={UserProfile} />

            <Route exact path="/update/personnel" component={PersonnelUpdate} />

            <Route exact path="/register/candidate" component={CandidateRegister}/>
            <Route exact path="/update/candidate" component={CandidateUpdate} />
            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/candidates/:id" component={CandidateDetail} />


            <Route exact path="/register/employer" component={EmployerRegister} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/employers/:id" component={EmployerJobAds} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
