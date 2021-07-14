import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'

export default function PersonnelProfile() {

    const {userInitials} = useSelector(state => state.user)

    let user = userInitials[0].user
    
  return (
    <div>
      <Card centered>
        <Image
          src={
            user.image == null
            ? "https://res.cloudinary.com/dwsq1lxha/image/upload/v1625941172/115-1150456_avatar-generic-avatar_fhhfkx.jpg"
            : user.image.url
          }
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{user.firstName} {user.lastName}</Card.Header>
          <Card.Meta>
            <span className="date">{user.birthOfDate}</span>
          </Card.Meta>
          <Card.Description>
              Email : {user.email} <br></br>
              TC No: {user.nationalityId}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button fluid primary as={NavLink} to="/update/personnel" >Güncelle</Button>
        </Card.Content>
      </Card>
    </div>
  );
}
