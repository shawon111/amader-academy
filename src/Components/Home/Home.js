import React from 'react';
import './Home.css';
import heroImg from '../../images/hero-image.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-image-container">
                        <img src={heroImg} alt="" />
                    </div>
                    <div className="hero-text-content">
                        <h2 className="text-uppercase fw-bold">Want to learn web development?</h2>
                        <p className="mt-4 pe-5">Launch your career as a Web Developer with the most in-demand technologies.With a deep and ever evolving understanding of the industry's requirements, we have carefully designed our curriculum to enable students to achieve their goals.</p>
                        <button className="btn mt-3 course-cta"><NavLink to="services">All Courses</NavLink></button>
                    </div>
                </div>
            </section>
            <section className="courses-section">
                <div className="container course-container">
                    <h2 className="text-uppercase fw-bold">Popular Courses</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;