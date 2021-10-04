import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import logo from '../../images/course-logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-contents">
                    
                    <div className="social-links">
                    <a className="social-icon" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="social-icon" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className="social-icon" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <img src={logo} alt="" className="footer-logo" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;