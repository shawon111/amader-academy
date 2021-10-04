import React from 'react';
import './Course.css';
import { Card } from 'react-bootstrap';
import { faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Course = (props) => {
    const {courseName, courseId, courseTime, courseRating, coursePrice, courseThumb} = props.course;
    return (
        <Card className="course-card">
  <Card.Img variant="top" src={courseThumb} />
  <div className="card-content">
  <Card.Body>
  <h6 className="text-start">rating</h6>
    <Card.Title className="text-start text-capitalize">{courseName}</Card.Title>
    <h6 className="text-start course-duration"><FontAwesomeIcon icon={faClock} /> {courseTime}</h6>
    <p className="text-start author"><span><small>by</small></span> Amader Academy</p>
  </Card.Body>
  <Card.Body className="d-flex justify-content-between card-bottom">
    <p className="price">${coursePrice}</p>
    <Card.Link className="add-cart-btn" href="#"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</Card.Link>
  </Card.Body>
  </div>
</Card>
    );
};

export default Course;