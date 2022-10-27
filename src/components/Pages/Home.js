import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/Home.css"



const Home = () => {
    return (
        <>
            <div className='home-image'>
                <div className='home-image-overlay'>
                    <div className='welcome'>
                        <p>Welcome</p>
                        <p>to</p>
                        <p>SajAcademy</p>
                    </div>
                </div>
            </div>
            <div className='bg-light my-4'>
                <Container className='bg-white shadow-lg'>
                    <Row>
                        <Col className='text-center title p-4'>
                            <div className='d-flex justify-content-between'>
                                <div className='ms-4'>
                                    <h1>Total Courses!</h1>
                                    <h1>8</h1>
                                </div>
                                <p className='line ms-4'></p>
                            </div>
                        </Col>
                        <Col className='text-center title p-4'>
                            <div className='d-flex justify-content-between'>
                                <div className='ms-4'>
                                    <h1>Total Students!</h1>
                                    <h1>388</h1>
                                </div>
                                <p className='line ms-4'></p>
                            </div>
                        </Col>
                        <Col className='text-center title p-4'>
                            <h1>Total Instructors!</h1>
                            <h1>13</h1>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className="image">
                <div className="image-overlay">

                    <h1 className='title'>Courses We Offer!</h1>


                    <Link to="/courses" className=''>
                        <Button variant="primary">Go To Courses</Button>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Home;