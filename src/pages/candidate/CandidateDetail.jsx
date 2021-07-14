import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import CandidateService from "../../services/candidate/candidateService";

export default function CandidateDetail() {
  let {id} = useParams();

  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .findById(id)
      .then((result) => setCandidate(result.data.data));
  }, []);

  console.log(candidate)

  return (
    <div>
      <Card.Group>
        <Card fluid>
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
            <Card.Header>
              {candidate.firstName} {candidate.lastName}
            </Card.Header>
            <Card.Meta>{candidate.birthOfDate}</Card.Meta>
            <Card.Description textAlign="left">

              <strong>ID: </strong>{candidate.id}

              <br></br>
              <strong>TC No: </strong>{candidate.nationalityId}

              <br></br>
              <strong>Email: </strong>{candidate.email}

              <br></br>
              
              
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button color="red">Sil</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>

    // <br></br>
    // <strong><Link icon={candidate.networks.networkName} to={candidate.networks.networkUrl}>{candidate.networks?candidate.networks.networkName:null}</Link></strong>
    // <br></br>
    // <strong>{candidate.educations?candidate.educations.school:null}</strong>
    // <strong>{candidate.educations?candidate.educations.fieldOfStudy:null}</strong>
    // <strong>{candidate.educations?candidate.educations.startDate:null}</strong>
    // <strong>{candidate.educations?candidate.educations.endDate:null}</strong>
    // <br></br>
    // <strong>{candidate.workExperiences?candidate.workExperiences.companyName:null}</strong>
    // <strong>{candidate.workExperiences?candidate.workExperiences.position:null}</strong>
    // <strong>{candidate.workExperiences?candidate.workExperiences.startDate:null}</strong>
    // <strong>{candidate.workExperiences?candidate.workExperiences.endDate:null}</strong>
    // <br></br>
    // <strong>{candidate.languages?candidate.languages.languageName:null}</strong>
    // <strong>{candidate.languages?candidate.languages.level:null}</strong>      
    // <br></br>
    // <strong>{candidate.skills?candidate.skills.skillName:null}</strong>
    // <strong>{candidate.skills?candidate.skills.level:null}</strong>
    // <br></br>
    // <strong>{candidate.coverLetter?candidate.coverLetter.description:null}</strong>
  );
}