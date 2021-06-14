import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList() {

  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(()=>{
      let jobAdvertisementService = new JobAdvertisementService()
      jobAdvertisementService.getJobAdvertisements().then(result=>setjobAdvertisements(result.data.data))
  })

  return (
    <div>
      <Grid columns={2} stackable divided>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Grid.Column key={jobAdvertisement.id}>
            
                  {jobAdvertisement.jobTitle.title}
                 
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}
