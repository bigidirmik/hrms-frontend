import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import CandidateService from "../../services/Candidate/candidateService";

export default function SignedIn(props) {
  const [candidate, setCandidate] = useState({
    id: parseInt(""),
    firstName: "",
    image: {
      url: "",
    },
  });

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .findById(31)
      .then((result) => setCandidate(result.data.data));
  }, []);

  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src={candidate.image.url} />
        <Dropdown pointing="top right">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Bilgilerim"
              icon="info"
              as={NavLink}
              to={"/profile/" + candidate.id}
            />
            <Dropdown.Item
              text="Çıkış Yap"
              icon="sign-out"
              onClick={props.signOut}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}


  /* {users.map((user) => (
          <Image
          avatar
          spaced="right"
          src={handleProfilePhoto(user)}
        />
        ))} */
