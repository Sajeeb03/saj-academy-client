import React from 'react';
import { Button } from 'react-bootstrap';
import { FaCheck, FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import "../../styles/course.css"

const Course = () => {
    const course = useLoaderData();
    const { img, details, body, title, price, id } = course;    
    return (
        <div className='container bg-white shadow-lg course-container'>
            <div className='p-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>{title}</h1>
                    <FaFileDownload className='fs-3' title='Click to download Pdf' />
                </div>
                <img className='course-image' src={img} alt="" />
                <h3 className='mt-3'>Course Overview</h3>
                <p className='fs-5'>{details}</p>
                <h3>What You Will Learn In This Course</h3>
                {
                    body.learnings.map((item, idx) => <p className='fs-5' key={idx}> <FaCheck></FaCheck> {item}</p>)
                }
                <Link to={`../payments/${id}`}>
                    <Button variant='info' className='fw-semibold fs-5'>Buy Premium for ${price}</Button>
                </Link>
            </div>
        </div>
    );
};

export default Course;