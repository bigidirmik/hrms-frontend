import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button primary as={NavLink} to="/login" onClick={props.signIn}>Giriş Yap</Button>
        <Button primary as={NavLink} to="/register/candidate" style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
      </Menu.Item>
    </div>
  );
}
