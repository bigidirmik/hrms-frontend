import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import JobAdvertisementDetail from "../../pages/JobAdvertisementDetail";
import JobAdvertisementList from "../../pages/JobAdvertisementList";
import Profile from "../../pages/Profile";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../../pages/Login";
import AddJobAdvertisement from "../../pages/AddJobAdvertisement";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {

  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAdvertisementList}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/job-adversitements" component={JobAdvertisementList}/>
            <Route exact path="/job-advertisement-detail/:id" component={JobAdvertisementDetail}/>
            <Route exact path="/job-advertisement-add" component={AddJobAdvertisement}/>
            <Route path="/profile" component={Profile}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
