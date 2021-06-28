import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import JobAdvertisementDetail from "../../pages/jobAdvertisement/JobAdvertisementDetail";
import JobAdvertisementList from "../../pages/jobAdvertisement/JobAdvertisementList";
import { ToastContainer } from "react-toastify";
import CandidateLogin from "../../pages/candidate/CandidateLogin";
import CandidateRegister from "../../pages/candidate/CandidateRegister";
import FavoriteDetail from "../../pages/jobAdvertisement/FavoriteDetail";
import JobAdvertisementPost from "../../pages/jobAdvertisement/JobAdvertisementPost";

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
            <Route exact path="/job-advertisements-post" component={JobAdvertisementPost}/>
            <Route exact path="/favorite-detail" component={FavoriteDetail}/>
            <Route exact path="/profile/:id"/>
            <Route exact path="/candidate-login" component={CandidateLogin}/>
            <Route exact path="/candidate-register" component={CandidateRegister}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
