import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Button, Icon, Item, Label } from "semantic-ui-react";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Item.Group divided>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Item key={jobAdvertisement.id}>
            <Item.Image src={jobAdvertisement.employer.logo.url} />

            <Item.Content>
              <Item.Header as="a">
                {jobAdvertisement.jobTitle.title}
              </Item.Header>
              <Item.Meta>
                <span>{jobAdvertisement.employer.companyName}</span>
              </Item.Meta>
              <Item.Description>
                {jobAdvertisement.description}
              </Item.Description>
              <Item.Extra>
                <Button secondary floated="right">
                  <Link to={`/job-advertisement-detail/${jobAdvertisement.id}`}>
                    İlan Detayı
                  </Link>
                  <Icon name="right chevron" />
                </Button>
                <Label
                  icon="clock"
                  content={jobAdvertisement.workingTime.workingTime}
                />
                <Label
                  icon="globe"
                  content={jobAdvertisement.typeOfJob.typeOfJob}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  );
}
