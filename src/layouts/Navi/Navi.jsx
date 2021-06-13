import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import Profile from "./Profile";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>

          <Menu.Item name="home" />

          <Menu.Item name="messages" />

          <Menu.Menu position="right">

            <Profile/>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>

          </Menu.Menu>
          
        </Container>
      </Menu>
    </div>
  );
}
