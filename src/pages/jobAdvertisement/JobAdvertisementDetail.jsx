import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Image, Button, Grid, Label, Icon } from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisement/jobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [jobAd, setJobAd] = useState({
    description: "",
    applicationDeadline:"",
    jobTitle: {
      title: "",
    },
    employer: {
      companyName: "",
      logo: {
        url: "",
      },
    },
    city:{
      cityName:""
    },
    typeOfJob:{
      typeOfJob:""
    },
    workingTime:{
      workingTime:""
    }
  });

  useEffect(() => {
    let jobAdService = new JobAdvertisementService();
    jobAdService.findById(id).then((result) => setJobAd(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid key={jobAd.id}>
        <Card.Content>
          <Image floated="right" width="100px" src={jobAd.employer.logo.url} />
          <Card.Header textAlign="left">
            <h1>{jobAd.jobTitle.title}</h1>
          </Card.Header>
          <Card.Meta textAlign="left">
            <h3>{jobAd.employer.companyName}</h3>
          </Card.Meta>
          <Card.Description textAlign="center">
            {jobAd.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
          <Button style={{ float: "left" }} as="a">
              <Icon name="map" />
              {jobAd.city.cityName}
            </Button>
            <Button style={{ float: "left" }} as="a">
              <Icon name="world" />
              {jobAd.typeOfJob.typeOfJob}
            </Button>
            <Button style={{ float: "left" }} as="a">
              <Icon name="clock" />
              {jobAd.workingTime.workingTime}
            </Button>
            <Button style={{ float: "left" }} as="a">
              <Icon name="user" />
              Açık Pozisyon Sayısı : {jobAd.positionQuota}
            </Button>
            <Button style={{ float: "left" }} as="a">
              <Icon name="user" />
              Son Başvuru Tarihi : {jobAd.applicationDeadline}
            </Button>
            <Button style={{ float: "right" }} color="red">
              Favori Ekle
              <Icon name="heart" style={{marginLeft:"0.5em"}} />
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
