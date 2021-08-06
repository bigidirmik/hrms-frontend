import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'

export default function CandidateProfile() {

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
          ui={true}
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
        <div className="ui two buttons">
            <Button fluid basic secondary as={NavLink} to={`/candidates/${user.id}`} >Detay</Button>
            <Button fluid basic color="blue" as={NavLink} to="/update/candidate" >Güncelle</Button>
            </div>
        </Card.Content>
      </Card>
    </div>
  );
}