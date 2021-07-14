import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { logout } from "../../store/actions/userActions";

export default function SignedIn() {
  const { userInitials } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const history = useHistory()

  let user = userInitials[0].user;

  function handleLogout(user) {
    history.push("/")
    dispatch(logout(user));
    toast.info("Çıkış Yapıldı!");
  }

  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src={
            user.image == null
              ? "https://res.cloudinary.com/dwsq1lxha/image/upload/v1625941172/115-1150456_avatar-generic-avatar_fhhfkx.jpg"
              : user.image.url
          }
        />
        <Dropdown pointing="top right">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Bilgilerim"
              icon="info"
              as={NavLink}
              to={"/profile/user/" + user.id }
            />
            <Dropdown.Item
              text="Çıkış Yap"
              icon="sign-out"
              onClick={() => handleLogout(user)}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
