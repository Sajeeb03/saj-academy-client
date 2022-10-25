import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='container pt-4'>
            <div className='bg-white w-50 m-auto shadow-lg p-4'>
                <h1 className='w-100 text-center text-secondary'>Sign In</h1>
                <Form className='w-50 m-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Working Email</Form.Label>
                        <Form.Control className='bg-light' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control className='bg-light' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Sign In
                    </Button>
                    <p className='mt-2 text-center'>New to SajAcademy? <Link to="/register">Register Here</Link> </p>
                </Form>
                <div className='w-50 m-auto'>
                    <p className='text-center mb-0'>OR</p>
                    <hr className='my-1' />
                    <Button onClick={handleGoogleSignIn} className='w-100 mt-4 fw-bold' variant="outline-dark"><FaGoogle className='text-primary fs-4'></FaGoogle>  Sign in with Google</Button>
                    <Button className='w-100 mt-1 fw-bold' variant="outline-dark"><FaGithub className='fs-4' />  Sign in with Github</Button>

                </div>
            </div>

        </div>

    );
};

export default Login;