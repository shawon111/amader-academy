import React from 'react';
import { Card } from 'react-bootstrap';
import './TeamMember.css';

const TeamMember = (props) => {
    const {name, id, teamPosition, image} = props.member;
    return (
        <div>
            <Card>
  <Card.Img src={image} />
  <Card.Body>
    <Card.Title><h4 className="text-uppercase fw-bold member-name">{name}</h4></Card.Title>
    <Card.Text>
        <h5 className="team-position">{teamPosition}</h5>
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    );
};

export default TeamMember;