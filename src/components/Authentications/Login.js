import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: "", password: "", generalError: "" });
    const { googleSignIn, gitHubSignIn, logInWithEmailPassword } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/home";

    const handleSubmit = (e) => {
        e.preventDefault();
        logInWithEmailPassword(userInfo.email, userInfo.password)
            .then(result => {
                console.log(result.user)
                toast.success("login successful")
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err)
                setErrors({ ...errors, generalError: err.message })
            })
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

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("login successful")
                navigate(location.state?.from?.pathname || "/home")
                setErrors({ ...errors, generalError: "" })

            })
            .catch(err => {
                console.error(err)
                setErrors({ ...errors, generalError: err.message })
            })
    }

    const handleGitHubSignIn = () => {
        gitHubSignIn(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("login successful")
                setErrors({ ...errors, generalError: '' })
                navigate(location.state?.from?.pathname || "/home")
            })
            .catch(err => {
                console.error(err)
                setErrors({ ...errors, generalError: err.message })
            })
    }
    return (
        <div className='container py-2 py-lg-4 title'>
            <div className='bg-white shadow-lg p-4 form'>
                <h1 className='w-100 text-center text-secondary'>Sign In</h1>
                <Form onSubmit={handleSubmit} className='form-input'>
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
                    {
                        errors.generalError && <p className='text-warning'>{errors.generalError}</p>
                    }
                    <p className='mt-2 text-center'>New to SajAcademy? <Link to="/register">Register Here</Link> </p>
                </Form>
                <div className='form-input'>
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