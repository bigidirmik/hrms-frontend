import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Label, Divider } from "semantic-ui-react";
import { removeFromFavorites } from "../../store/actions/favoriteActions";

export default function Favorites() {
  const dispatch = useDispatch();

  const { favoriteInitials } = useSelector((state) => state.favorites);

  const handleRemoveFromFavorites = (jobAdvertisement) => {
    dispatch(removeFromFavorites(jobAdvertisement));
  };

  return (
    <div>
      <Dropdown
        pointing="top right"
        style={{ marginTop: "1.3em" }}
        text="Favoriler"
        icon="heart"
      >
        <Dropdown.Menu>
          {favoriteInitials.map((favoriteInitial) => (
            <Dropdown.Item as={NavLink} to={`/job-advertisements/${favoriteInitial.jobAdvertisement.id}`}>
              {favoriteInitial.jobAdvertisement.jobTitle.title}
              / /
              {favoriteInitial.jobAdvertisement.employer.companyName}
              <Label
                icon="delete"
                color="red"
                style={{ marginLeft: "0.5em" }}
                onClick={() =>
                  handleRemoveFromFavorites(favoriteInitial.jobAdvertisement)
                }
              />
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/favorites-detail">
            Favorilere Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
