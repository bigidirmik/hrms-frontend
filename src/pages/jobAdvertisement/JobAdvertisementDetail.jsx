import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Image, Button, Icon, Label, Segment } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisement/jobAdvertisementService";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/actions/favoriteActions";
import { toast } from "react-toastify";

export default function JobAdvertisementDetail() {
  const { favoriteInitials } = useSelector((state) => state.favorites);
  const {userInitials} = useSelector((state) => state.user)

  const dispatch = useDispatch();

  let { id } = useParams();

  const [jobAd, setJobAd] = useState({
    description: "",
    applicationDeadline: "",
    jobTitle: {
      title: "",
    },
    employer: {
      companyName: "",
      image: {
        url: "",
      },
    },
    city: {
      cityName: "",
    },
    typeOfJob: {
      typeOfJob: "",
    },
    workingTime: {
      workingTime: "",
    },
  });

  useEffect(() => {
    let jobAdService = new JobAdvertisementService();
    jobAdService.getJobAdvertisementById(id).then((result) => setJobAd(result.data.data));
  }, []);

  const handleFavorites = (jobAdvertisement) => {
    let result = favoriteInitials.find(
      (f) => f.jobAdvertisement.id === jobAdvertisement.id
    );
    if (result) {
      dispatch(removeFromFavorites(jobAdvertisement));
      toast.info(
        `${jobAdvertisement.jobTitle.title} ilanı favorilerden kaldırıldı!`
      );
    } else {
      dispatch(addToFavorites(jobAdvertisement));
      toast.success(
        `${jobAdvertisement.jobTitle.title} ilanı favorilere eklendi!`
      );
    }
  };

  const handleColor = (jobAdvertisement) => {
    let result = favoriteInitials.find(
      (f) => f.jobAdvertisement.id === jobAdvertisement.id
    );
    if (result) {
      return "red";
    } else {
      return "grey";
    }
  };

  return (
    <div>
      <Card fluid key={jobAd.id}>
            <Card.Content>
              <Image
                floated="left"
                width="100px"
                src={jobAd.employer.image.url}
              />
              {userInitials.length > 0 && (
                <Label
                  corner="right"
                  icon="heart"
                  onClick={() => handleFavorites(jobAd)}
                  as="a"
                  color={handleColor(jobAd)}
                />
              )}
              <Card.Header textAlign="center">
                <h1>{jobAd.jobTitle.title}</h1>
              </Card.Header>
              <Card.Meta textAlign="center">
                <h3>{jobAd.employer.companyName}</h3>
              </Card.Meta>
              <Card.Description textAlign="center">
                <Segment
                  style={{
                    overflow: "auto",
                    maxHeight: 75,
                    width: "85%",
                    float: "left",
                  }}
                >
                  {jobAd.description}
                </Segment>
              </Card.Description>
              <Button style={{ float: "right" }} as="a">
                <Icon name="map marker alternate" />
                {jobAd.city.cityName}
              </Button>
            </Card.Content>
            <Card.Content extra>
              <div>
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
                  Açık Pozisyon : {jobAd.positionQuota}
                </Button>
                <Button style={{ float: "left" }} as="a">
                  <Icon name="calendar alternate" />
                  Son Başvuru : {jobAd.applicationDeadline}
                </Button>
                <Button style={{ float: "left" }} as="a">
                  <Icon name="money" />
                  Ücret : {jobAd.salaryMin>0? `${jobAd.salaryMin} /` : null} {jobAd.salaryMax>0? jobAd.salaryMax : null} ₺
                </Button>
              </div>
            </Card.Content>
          </Card>
    </div>
  );
}
