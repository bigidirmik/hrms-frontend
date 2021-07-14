import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisement/jobAdvertisementService";


//aşağıda coment edilen button ilan aktif/deaktif ve silme yapılacak
export default function EmployerJobAds() {
  let { id } = useParams();

  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let jobAdService = new JobAdvertisementService();
    jobAdService
      .getJobAdvertisementsByEmployerId(id)
      .then((result) => setJobAds(result.data.data));
  }, []);

  return (
    <div>
      {jobAds.map((jobAd) => (
        <Card fluid key={jobAd.id}>
          <Card.Content>
            <Image
              floated="right"
              width="100px"
              src={jobAd.employer.image.url}
            />
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
              {/* <Button
                style={{ float: "right" }}
                color={handleColor(jobAd)}
                onClick={() => handleFavorites(jobAd)}
              >
                {handleText(jobAd)}
                <Icon name="heart" style={{ marginLeft: "0.5em" }} />
              </Button> */}
            </div>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
