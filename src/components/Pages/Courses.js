import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLoaderData } from 'react-router-dom';
import '../../styles/courses.css'
import { Button } from 'react-bootstrap';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <>

            <div className='image'>
                <h1 className='image-overlay title'>Explore Our Courses</h1>
            </div>
            <Container className='my-4 courses-container'>
                <Row>
                    <Col lg={9}>

                            <div className='course'>
                                {
                                courses.map((course, idx) => <div className='bg-white shadow-lg rounded-2 position-relative courses-size' key={idx}>
                                        <img className='course-img rounded-top' src={course.img} alt="" />
                                    <h3 className='p-2 title'>{course.title}</h3>
                                    <p className='px-2 title fw-semibold'>Price: ${course.price}</p>
                                    <Link to={`../course/${course.id}`}>
                                        <Button className="details-btn fw-bold" variant="info">Details</Button>
                                    </Link>
                                    </div>)
                                }
                            </div>

                    </Col>
                    <Col lg={3}>
                        <div className='bg-white p-4 shadow-lg h-100 title'>
                            <h3>Courses We Offer</h3>
                            <p><small>Click to explore more</small></p>
                            {courses.map((course, idx) => <p className='sidebar-text' key={idx}><Link className='text-decoration-none' to={`../course/${course.id}`}>{course.title}</Link></p>)}
                        </div>
                    </Col>
                </Row>
            </Container>

        </>

    );
};

export default Courses;