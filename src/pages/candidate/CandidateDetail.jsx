import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, Image } from "semantic-ui-react";
import CandidateService from "../../services/candidate/candidateService";
import { logout } from "../../store/actions/userActions";

export default function CandidateDetail() {
  let {id} = useParams();

  const dispatch = useDispatch()

  let history = useHistory()

  const [candidate, setCandidate] = useState({});

  const {userInitials} = useSelector(state => state.user)

  let user = userInitials[0].user;

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidateById(id)
      .then((result) => setCandidate(result.data.data));
  }, []);

  function handleDelete(id) {
    let candidateService = new CandidateService();
    candidateService.delete(id).then(toast.info("Aday silindi!"))
    if (!user.admin) {
      dispatch(logout(candidate))
    }
    history.push("/")
  }

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

            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button color="red" onClick={()=>handleDelete(candidate.id)} >Sil</Button>
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