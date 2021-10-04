import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/course-logo.png';
import './Header.css';

const Header = () => {
    const activeLink = {
        color: '#6EC1E4'
    }
    return (
        <header>
            <div className="container header-container">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="site-logo" />
                </div>
                <div className="menu">
                    <NavLink activeStyle={activeLink} to="/home">Home</NavLink>
                    <NavLink activeStyle={activeLink} to="/about">About Us</NavLink>
                    <NavLink activeStyle={activeLink} to="/services">Courses</NavLink>
                    <NavLink activeStyle={activeLink} to="/contact">Contact Us</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;