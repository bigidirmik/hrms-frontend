import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image className="profileImages"
          avatar
          spaced="right"
          src="https://www.kindpng.com/picc/m/634-6340670_generic-profile-pic-circle-hd-png-download.png"
        />
        <Dropdown pointing="top right" key="1">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" as={NavLink} to="/profile"/>
            <Dropdown.Item text="Çıkış Yap" icon="sign-out" onClick={signOut}/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
