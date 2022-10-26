import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const { googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleEmail = e => {
        const email = e.target.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrors({ ...errors, email: "Please provide a valid email" });
            setUserInfo({ ...userInfo, email: "" });
        } else {
            setErrors({ ...errors, email: "" });
            setUserInfo({ ...userInfo, email: email });
        }
    }

    const handlePassword = e => {
        const password = e.target.value;
        if (password.length < 6) {
            setErrors({ ...errors, password: "Password must be at least 6 characters" })
            setUserInfo({ ...userInfo, password: "" });
        }
        else {
            setErrors({ ...errors, password: "" })
            setUserInfo({ ...userInfo, password: password })
        }
    }
    console.log(userInfo);
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    const handleGitHubSignIn = () => {
        gitHubSignIn(gitHubProvider)
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
                <Form onSubmit={handleSubmit} className='w-50 m-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Working Email</Form.Label>
                        <Form.Control onChange={handleEmail} className='bg-light' type="email" placeholder="Enter email" />
                    </Form.Group>
                    {
                        errors.email && <p className='text-warning'>{errors.email}</p>
                    }
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control onChange={handlePassword} className='bg-light' type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        errors.password && <p className='text-warning'>{errors.password}</p>
                    }
                    <Button className='w-100' variant="primary" type="submit">
                        Sign In
                    </Button>
                    <p className='mt-2 text-center'>New to SajAcademy? <Link to="/register">Register Here</Link> </p>
                </Form>
                <div className='w-50 m-auto'>
                    <p className='text-center mb-0'>OR</p>
                    <hr className='my-1' />
                    <Button onClick={handleGoogleSignIn} className='w-100 mt-4 fw-bold' variant="outline-dark"><FaGoogle className='text-primary fs-4'></FaGoogle>  Sign in with Google</Button>
                    <Button onClick={handleGitHubSignIn} className='w-100 mt-1 fw-bold' variant="outline-dark"><FaGithub className='fs-4' />  Sign in with Github</Button>
                </div>
            </div>

        </div>

    );
};

export default Login;