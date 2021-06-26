import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

  const { candidateInitials } = useSelector((state) => state.candidate);

  let history = useHistory();

  function handleSignOut() {
    history.push("/");
  }

  function handleSignIn() {
    history.push("/login");
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item icon="home" as={NavLink} to="/" />

          <Menu.Menu position="right">
            
              {candidateInitials.length===0 && <SignedOut signIn={handleSignIn} />}

              {candidateInitials.length>1 && <SignedIn signOut={handleSignOut} />}

              <SignedIn signOut={handleSignOut} />
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
