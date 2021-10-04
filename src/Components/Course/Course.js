import React from 'react';
import { Card } from 'react-bootstrap';
import { faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Course.css';

const Course = (props) => {
    const {courseName, courseId, courseTime, courseRating, coursePrice, courseThumb} = props.course;
    return (
        <Card>
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