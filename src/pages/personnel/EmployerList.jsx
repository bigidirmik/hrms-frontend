import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import EmployerService from "../../services/employer/employerService"

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then((result)=>setEmployers(result.data.data))
    }, [])

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
                  <strong>{employer.id}</strong><br></br><br></br>
                  <strong>{employer.webAdress}</strong><br></br>
                  <strong>{employer.phoneNumber}</strong><br></br>
                  <strong>{employer.isConfirmed}</strong><br></br>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="blue" as={NavLink} to={`/employers/${employer.id}`} >
                  Şirkete Ait İlanlar
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
        </div>
    )
}
