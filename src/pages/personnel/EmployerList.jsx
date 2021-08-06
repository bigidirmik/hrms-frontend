import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import EmployerService from "../../services/employer/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  const { userInitials } = useSelector((state) => state.user);

  let history = useHistory();

  let employerService = new EmployerService();

  useEffect(() => {
    if (userInitials.length > 0) {
      employerService
        .getEmployers()
        .then((result) => setEmployers(result.data.data));
    } else {
      history.push("/");
    }
  }, [handleConfirmation]);

  function handleConfirmationColor(employerId) {
    let result = employers.find(employer=>employer.id===employerId)
    if (result.confirmed) {
      return "green"
    } else {
      return "red"
    }
  }

  function handleConfirmationText(employerId) {
    let result = employers.find(employer=>employer.id===employerId)
    if (result.confirmed) {
      return "Onaylandı"
    } else {
      return "Onaylı Değil"
    }
  }

  function handleConfirmation(employerId) {
    let result = employers.find(employer=>employer.id===employerId)
    if (result.confirmed) {
      return employerService.setConfirmationStatus(userInitials[0].user.id,employerId,false)
    } else {
      return employerService.setConfirmationStatus(userInitials[0].user.id,employerId,true)
    }
  }

  return (
    <div>
      <Card.Group>
        {employers.map((employer) => (
          <Card fluid key={employer.id}>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={
                  employer.image == null
                    ? "https://res.cloudinary.com/dwsq1lxha/image/upload/v1625941172/115-1150456_avatar-generic-avatar_fhhfkx.jpg"
                    : employer.image.url
                }
              />
              <Card.Header>{employer.companyName}</Card.Header>
              <Card.Description textAlign="left">
                <strong>{employer.id}</strong>
                <br></br>
                <br></br>
                <strong>{employer.webAdress}</strong>
                <br></br>
                <strong>{employer.phoneNumber}</strong>
                <br></br>
                <strong>{employer.isConfirmed}</strong>
                <br></br>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="blue"
                  as={NavLink}
                  to={`/employers/${employer.id}`}
                >
                  Şirkete Ait İlanlar
                </Button>
                <Button
                  basic
                  color={handleConfirmationColor(employer.id)}
                  onClick={()=>handleConfirmation(employer.id)}
                >
                  {handleConfirmationText(employer.id)}
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
