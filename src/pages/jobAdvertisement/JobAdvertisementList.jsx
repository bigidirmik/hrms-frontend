import React, { useEffect, useState } from "react";
import { Card, Image, Icon, Divider, Label, Segment } from "semantic-ui-react";
import "../../styles/JobAdvertisementList.css";
import JobAdvertisementService from "../../services/JobAdvertisement/jobAdvertisementService";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/actions/favoriteActions";

export default function JobAdvertisementList() {
  const { favoriteInitials } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let jobAdService = new JobAdvertisementService();
    jobAdService
      .getJobAdvertisements()
      .then((result) => setJobAds(result.data.data));
  }, []);

  const handleFavorites = (jobAdvertisement) => {
    let result = favoriteInitials.find((f) => f.jobAdvertisement.id === jobAdvertisement.id);
    if (result) {
      dispatch(removeFromFavorites(jobAdvertisement));
    } else {
      dispatch(addToFavorites(jobAdvertisement));
    }
  };

  const handleColor = (jobAdvertisement) => {
    let result = favoriteInitials.find((f) => f.jobAdvertisement.id === jobAdvertisement.id);
    if (result) {
      return "red";
    } else {
      return "gray";
    }
  };

  return (
    <div className="jobAdvertisementList">
      <Card.Group>
        {jobAds.map((jobAd) => (
          <Card key={jobAd.id}>
            <Image
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
            <Label
              corner="right"
              icon="heart"
              onClick={() => handleFavorites(jobAd)}
              as="a"
              color={handleColor(jobAd)}
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
                <Divider />
                <Segment style={{ overflow: "auto", maxHeight: 75 }}>
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
