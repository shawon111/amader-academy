import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Services.css';

const Services = () => {
    const [courses] = useCourses();
    return (
        <div>
            <section>
                <div className="container">
                    <h1 className="courses-heading text-uppercase fw-bold">
                        our courses
                    </h1>
                    <div className="courses-container">
                        {
                            courses.map(course => <Course 
                                course={course}
                                key={course.courseId}
                                ></Course>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;