import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLoaderData } from 'react-router-dom';
import '../../styles/courses.css'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <>
            <h1 className='text-center pt-4'>Our Courses</h1>
            <Container className=''>
                <Row>
                    <Col lg={9}>
                        <div className=''>
                            <div className='course'>
                                {
                                    courses.map((course, idx) => <div className='bg-white shadow-lg rounded-2' key={idx}>
                                        <img className='course-img rounded-top' src={course.img} alt="" />
                                        <h3 className='p-2'>{course.title}</h3>
                                    </div>)
                                }
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='bg-white p-4 shadow-lg'>
                            {courses.map((course, idx) => <p key={idx}><Link className='text-decoration-none' to={`../course/${course.id}`}>{course.title}</Link></p>)}
                        </div>
                    </Col>
                </Row>
            </Container>

        </>

    );
};

export default Courses;