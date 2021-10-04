import React from 'react';
import'./NotFound.css';

const NotFound = () => {
    return (
        <section className="not-found-page">
            <div className="container">
                <h1 className="fw-bold text-center">404 error</h1>
                <h4>the page you are looking for is not found...</h4>
            </div>
        </section>
    );
};

export default NotFound;