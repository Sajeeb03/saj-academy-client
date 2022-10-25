import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    return (
        <div className='container pt-4'>
            <div className='bg-white w-50 m-auto shadow-lg p-4'>
                <h1 className='w-100 text-center text-secondary'>Register</h1>
                <Form className='w-50 m-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='fw-bold'>Full Name</Form.Label>
                        <Form.Control className='bg-light' type="text" placeholder="Your full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control className='bg-light' type="text" placeholder="Photo URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Working Email</Form.Label>
                        <Form.Control className='bg-light' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control className='bg-light' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>
                    <p className='mt-2 text-center'>Already Have an Account? <Link to="/login">Sign in here</Link> </p>
                </Form>
            </div>

        </div>
    );
};

export default Register;