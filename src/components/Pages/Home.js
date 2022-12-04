import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import "../../styles/Home.css"



const Home = () => {
    useTitle("Home")
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
                <Container className='bg-white shadow-lg p-4'>
                    <Row className='test'>
                        <Col lg={4} className='text-center title'>
                            <div className='d-flex justify-content-around'>
                                <div className='total'>
                                    <h2>Total Courses!</h2>
                                    <h2>8</h2>
                                </div>
                                <p className="line"></p>
                            </div>
                            <hr />
                        </Col>
                        <Col lg={4} className='text-center title'>
                            <div className='d-flex justify-content-around'>
                                <div className=''>
                                    <h2>Total Students!</h2>
                                    <h2>388</h2>
                                </div>
                                <p className="line"></p>
                            </div>
                            <hr />
                        </Col>
                        <Col lg={4} className='text-center title'>
                            <h2>Total Instructors!</h2>
                            <h2>13</h2>
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