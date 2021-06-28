import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Image,
  Icon,
  Divider,
  Dropdown,
  Label,
  Segment
} from "semantic-ui-react";
import "../../styles/JobAdvertisementList.css";
import JobAdvertisementService from "../../services/JobAdvertisement/jobAdvertisementService";
import { NavLink } from "react-router-dom";

export default function JobAdvertisementList() {
  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let jobAdService = new JobAdvertisementService();
    jobAdService
      .getJobAdvertisements()
      .then((result) => setJobAds(result.data.data));
  }, []);

  return (
    <div className="jobAdvertisementList">
      <Card.Group>
        {jobAds.map((jobAd) => (
          
          <Card key={jobAd.id}>
            <Image
              label={{ as: "a", corner: "right", icon: "heart" }}
              src={jobAd.employer.logo.url}
              wrapped
              ui={false}
              style={{ height: "225px" }}
            />
            <Label
              corner="left"
              icon="info"
              as={NavLink}
              to={`/job-advertisements/${jobAd.id}`}
            />
            <Card.Content>
              <Card.Header>{jobAd.jobTitle.title}</Card.Header>
              <Card.Meta>
                <span>{jobAd.employer.companyName}</span>
              </Card.Meta>
              <Divider />
              <Card.Description>
                <Label as="a">
                  <Icon name="user" />
                  {jobAd.positionQuota}
                </Label>
                <Label as="a">
                  <Icon name="time" />
                  {jobAd.applicationDeadline}
                </Label>
                <Label as="a">
                  <Icon name="money" />
                  {jobAd.salaryMin} -{jobAd.salaryMax}
                </Label>
                <Divider/>
                <Segment style={{overflow: 'auto', maxHeight: 75 }}>
                {jobAd.description}
          </Segment>
                
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label style={{ float: "left" }} as="a">
                <Icon name="world" />
                {jobAd.typeOfJob.typeOfJob}
              </Label>
              <Label style={{ float: "right" }} as="a">
                <Icon name="time" />
                {jobAd.workingTime.workingTime}
              </Label>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
