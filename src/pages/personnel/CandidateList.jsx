import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import CandidateService from "../../services/candidate/candidateService";

export default function EmployerActivation() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        {candidates.map((candidate) => (
          <Card fluid key={candidate.id}>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={
                    candidate.image == null
              ? "https://res.cloudinary.com/dwsq1lxha/image/upload/v1625941172/115-1150456_avatar-generic-avatar_fhhfkx.jpg"
              : candidate.image.url
                }
              />
              <Card.Header>{candidate.firstName} {candidate.lastName}</Card.Header>
              <Card.Meta>{candidate.birthOfDate}</Card.Meta>
              <Card.Description textAlign="left">
                  <strong>{candidate.id}</strong><br></br><br></br>
                  {candidate.email}<br></br>
                NetworkName : NetworkUrl.com/candidate
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="blue" as={NavLink} to={`/candidates/${candidate.id}`} >
                  Aday Detayları
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
