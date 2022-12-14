import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { FaCheck, FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import "../../styles/course.css"
import ReactToPdf from "react-to-pdf";
import useTitle from '../../Hooks/useTitle';


const Course = () => {
    const course = useLoaderData();
    const ref = useRef();
    const { img, details, body, title, price, id } = course;
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [14, 12]
    };    

    useTitle("CheckOut");
    return (
        <div className='container bg-white shadow-lg course-container title'>

            <div ref={ref} className='p-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>{title}</h1>
                    <ReactToPdf targetRef={ref} filename="code-example.pdf" options={options}>
                        {({ toPdf }) => <FaFileDownload onClick={toPdf} className='fs-3' title='Click to download Pdf' />}
                    </ReactToPdf>
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