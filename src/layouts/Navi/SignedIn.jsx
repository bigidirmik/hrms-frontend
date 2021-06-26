import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  const { candidateInitials } = useSelector((state) => state.candidate);

  //candidateInitial.candidate.image.url;

  return (
    <div>
      <Menu.Item>
        {candidateInitials.map((candidateInitial) => (
          <Image
            className="profileImages"
            avatar
            spaced="right"
            src={""}
          />
        ))}

        <Dropdown pointing="top right" key="1">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Bilgilerim"
              icon="info"
              as={NavLink}
              to="/profile"
            />
            <Dropdown.Item text="Çıkış Yap" icon="sign-out" onClick={signOut} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
