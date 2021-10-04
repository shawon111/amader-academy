import React, { useEffect, useState } from 'react';
import './About.css';
import heroImg from '../../images/about-hero.jpg'
import TeamMember from '../TeamMember/TeamMember';

const About = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./teamMembers.JSON')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[]);
    return (
        <div>
            <section className="about-hero-section">
                <div className="container">
                    <h1 className="about-heading text-uppercase fw-bold py-5">
                        about amader academy
                    </h1>
                    <div className="about-contents d-flex align-items-center">
                        <div className="about-img w-50 pe-5">
                            <img src={heroImg} alt="about"/>
                        </div>
                        <div className="about-text-contents w-50 ps-5 text-start">
                            <h2 className="text-uppercase fw-bold">Who we are?</h2>
                            <p>
                            Amader Academy is a 21st-century career-focused coding school. We are on a mission to find untapped or underutilized talent and to train them for the most in-demand jobs in the world. Amader Academy is introducing a new model of higher education in which the school invests in the students, instead of the other way around.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-team">
                <div className="container">
                <h2 className="our-team-heading text-uppercase fw-bold pb-5">
                Meet our executive team
                </h2>
                <div className="team-members d-grid">
                    {
                        members.map(member => <TeamMember
                             key={member.id}
                             member={member}
                             ></TeamMember>)
                    }
                </div>
                </div>
            </section>
        </div>
    );
};

export default About;