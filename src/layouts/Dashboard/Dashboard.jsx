import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertisementList from "../../pages/JobAdvertisementList";
import Sidebar from "../Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertisementList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
