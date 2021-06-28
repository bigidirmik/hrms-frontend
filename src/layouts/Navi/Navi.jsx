import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import Favorites from "../../pages/jobAdvertisement/Favorites";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { candidateInitials } = useSelector((state) => state.candidate);

  let history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top" borderless>
        <Container>

          <Menu.Item icon="home" as={NavLink} to="/job-advertisements" />
          <Menu.Item icon="plus" as={NavLink} to="/job-advertisements-post"/>

          <Menu.Menu position="right">

            {isAuthenticated?<Favorites />:null}
            
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}

            {candidateInitials.length === 0 && (
              <SignedOut signIn={handleSignIn} />
            )}

            {candidateInitials.length > 1 && (
              <SignedIn signOut={handleSignOut} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
