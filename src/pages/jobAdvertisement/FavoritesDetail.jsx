import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { removeFromFavorites } from "../../store/actions/favoriteActions";

export default function FavoriteDetail() {
  const dispatch = useDispatch();

  const { favoriteInitials } = useSelector((state) => state.favorites);

  const handleFavorites = (jobAdvertisement) => {
    let result = favoriteInitials.find(
      (f) => f.jobAdvertisement.id === jobAdvertisement.id
    );
    if (result) {
      dispatch(removeFromFavorites(jobAdvertisement));
    }
  };

  const handleColor = (jobAdvertisement) => {
    let result = favoriteInitials.find(
      (f) => f.jobAdvertisement.id === jobAdvertisement.id
    );
    if (result) {
      return "red";
    }
  };

  const handleText = (jobAdvertisement) => {
    let result = favoriteInitials.find(
      (f) => f.jobAdvertisement.id === jobAdvertisement.id
    );
    if (result) {
      return "Favori Kaldır";
    }
  };

  return (
    <div>
      {favoriteInitials.map((favoriteInitial) => (
        <Card fluid key={favoriteInitial.jobAdvertisement.id}>
          <Card.Content>
            <Image
              floated="right"
              width="100px"
              src={favoriteInitial.jobAdvertisement.employer.logo.url}
            />
            <Card.Header textAlign="left">
              <h1>{favoriteInitial.jobAdvertisement.jobTitle.title}</h1>
            </Card.Header>
            <Card.Meta textAlign="left">
              <h3>{favoriteInitial.jobAdvertisement.employer.companyName}</h3>
            </Card.Meta>
            <Card.Description textAlign="center">
              {favoriteInitial.jobAdvertisement.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button style={{ float: "left" }} as="a">
                <Icon name="map" />
                {favoriteInitial.jobAdvertisement.city.cityName}
              </Button>
              <Button style={{ float: "left" }} as="a">
                <Icon name="world" />
                {favoriteInitial.jobAdvertisement.typeOfJob.typeOfJob}
              </Button>
              <Button style={{ float: "left" }} as="a">
                <Icon name="clock" />
                {favoriteInitial.jobAdvertisement.workingTime.workingTime}
              </Button>
              <Button style={{ float: "left" }} as="a">
                <Icon name="user" />
                Açık Pozisyon Sayısı :{" "}
                {favoriteInitial.jobAdvertisement.positionQuota}
              </Button>
              <Button style={{ float: "left" }} as="a">
                <Icon name="user" />
                Son Başvuru Tarihi :{" "}
                {favoriteInitial.jobAdvertisement.applicationDeadline}
              </Button>
              <Button
                style={{ float: "right" }}
                color={handleColor(favoriteInitial.jobAdvertisement)}
                onClick={() =>
                  handleFavorites(favoriteInitial.jobAdvertisement)
                }
              >
                {handleText(favoriteInitial.jobAdvertisement)}
                <Icon name="heart" style={{ marginLeft: "0.5em" }} />
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
