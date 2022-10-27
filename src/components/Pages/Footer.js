import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <Container className='py-4 title'>
            <Row>
                <Col lg={4} className="pt-3">
                    <img style={{ height: "60px", width: "300px", marginLeft: '-25px', paddingTop: '0px' }} className='img-fluid' src={logo} alt="" />
                    <p className='ps-2 fs-5'>Saj Academy is a demo learning platform but I really have a dream to build a academy to teach others. One day I will be there.</p>
                    <p className='ps-2 fw-semibold fs-5'>Follow Me On</p>
                    <div className='ps-2 fs-5'>
                        <Button className='border-secondary' variant="outline-info"><FaFacebook className='text-dark fs-5' /></Button>
                        <Button className='ms-3 border-secondary' variant="outline-info"><FaLinkedin className='text-dark fs-5' /></Button>
                        <Button className='ms-3 border-secondary' variant="outline-info"><FaGithub className='text-dark fs-5' /></Button>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='w-75 m-auto mt-4'>
                        <h3>Technologies We Used</h3>
                        <ul className='fs-5'>
                            <li>React Router</li>
                            <li>React Bootstrap</li>
                            <li>React Hot Toast</li>
                            <li>Vanilla CSS</li>
                            <li>React to Pdf</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='text-center mt-4'>
                        <h3>Explore</h3>
                        <div className='fs-5'>
                            <Link className='text-dark text-decoration-none' to="/home">Home</Link>
                            <Link className='text-dark text-decoration-none d-block' to="/courses">Courses</Link>
                            <Link className='text-dark text-decoration-none d-block' to="/blogs">Blogs</Link>
                            <Link className='text-dark text-decoration-none d-block' to="/home">FAQ</Link>
                            <Link className='text-dark text-decoration-none d-block' to="/login">Sign In</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;