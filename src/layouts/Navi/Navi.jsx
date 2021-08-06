import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import Favorites from "../../pages/jobAdvertisement/Favorites";
import AdminMenuItems from "./AdminNavi/AdminMenuItems";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const { favoriteInitials } = useSelector((state) => state.favorites);

  const { userInitials } = useSelector((state) => state.user);

  function handleNaviIcons() {
    if (userInitials[0]) {
      if (userInitials[0].user.admin) {
        return <AdminMenuItems />
      }else if (userInitials[0].user.companyName) {
        return <Menu.Item icon="plus" as={NavLink} to="/job-advertisements-add" />
      }
      else{
        return <Menu.Item icon="file alternate" as={NavLink} to={userInitials[0].user.resume?"/resume":"/resume-add"} />
      }
    }
  }

  return (
    <div>
      
      <Menu inverted fixed="top" borderless>
        <Container>
          <Menu.Item icon="home" as={NavLink} to="/job-advertisements" />
          
          {handleNaviIcons()}

          <Menu.Menu position="right">
            {favoriteInitials.length > 0 && <Favorites />}

            {userInitials.length === 0 && <SignedOut />}

            {userInitials.length > 0 && <SignedIn />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
