import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <section className="contact-hero-section">
                <div className="container">
                    <h1 className="text-uppercase fw-bold">Contact Us</h1>
                    <div className="contact-form-container d-flex">
                        <div className="contact-info w-50 p-5">
                            <address>
                            13th Street 47 W 13th St, New York, NY 10011, USA
                            <br/>
                            phone: +18638589365
                            <br/>
                            email: amaderacademy@gmail.com
                            </address>
                            <p>We know that choosing the right school or a career path can be a difficult and tiring process, and that's why we're here for you. Contact us to ask us any questions, we'll respond over email as soon as possible!</p>
                        </div>
                        <div className="contact-form w-50 p-5">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="name" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="Your message" as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="submit-btn mt-3" type="submit">
                                Send Your Message
                            </Button>
                        </Form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;