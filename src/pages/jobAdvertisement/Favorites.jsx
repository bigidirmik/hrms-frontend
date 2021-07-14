import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";
import { removeFromFavorites } from "../../store/actions/favoriteActions";
import { toast } from "react-toastify";

export default function Favorites() {
  const dispatch = useDispatch();

  const { favoriteInitials } = useSelector((state) => state.favorites);

  const handleRemoveFromFavorites = (jobAdvertisement) => {
    dispatch(removeFromFavorites(jobAdvertisement));
    toast.info(
      `${jobAdvertisement.jobTitle.title} ilanı favorilerden kaldırıldı!`
    );
  };

  return (
    <div>
      <Dropdown
        pointing="top right"
        style={{ marginTop: "1.2em" }}
        icon="heart"
      >
        <Dropdown.Menu>
          {favoriteInitials.map((favoriteInitial) => (
            <Dropdown.Item key={favoriteInitial.jobAdvertisement.id}>
              <Label
                style={{ marginRigth: "0.5em"}}
                as={NavLink}
                to={`/job-advertisements/${favoriteInitial.jobAdvertisement.id}`}
              >
                {`${favoriteInitial.jobAdvertisement.jobTitle.title} (${favoriteInitial.jobAdvertisement.employer.companyName})`}
              </Label>

              <Label
                icon="window close"
                color="red"
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
