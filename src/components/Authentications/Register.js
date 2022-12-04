import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const Register = () => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({ email: "", password: "", generalError: "" })
    const [checked, setChecked] = useState(false)
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle("Register")
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        createUser(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setErrors({ ...errors, generalError: "" });
                updateProfile(name, photoURL)
                toast.success("Registration successful")
                navigate(location.state?.from?.pathname || "/home", { replace: true })
            })
            .catch(err => {
                console.error(err)
                setErrors({ ...errors, generalError: err.message })
            })
    }

    const updateProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        profileUpdate(profile)
            .then(() => {
                // Profile updated!
                // ...
                setErrors({ ...errors, generalError: "" });
            }).catch((error) => {
                console.error(error)
            });
    }

    const handleEmail = e => {
        const email = e.target.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrors({ ...errors, email: "Please Enter a valid Email" })
            setUserInfo({ ...userInfo, email: "" })
        }
        else {
            setErrors({ ...errors, email: "" })
            setUserInfo({ ...userInfo, email: email });
        }
    }

    const handlePassword = e => {
        const password = e.target.value;
        if (password.length < 6) {
            setErrors({ ...errors, password: "Password Must Be At Least 6 Characters" });
            setUserInfo({ ...userInfo, password: "" });
        }
        else {
            setErrors({ ...errors, password: "" });
            setUserInfo({ ...userInfo, password: password })
        }
    }

    return (
        <div className='container py-2 py-lg-4 title'>
            <div className='bg-white form shadow-lg p-4'>
                <h1 className='w-100 text-center text-secondary'>Register</h1>
                <Form onSubmit={handleSubmit} className='form-input'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='fw-bold'>Full Name</Form.Label>
                        <Form.Control name='name' className='bg-light' type="text" placeholder="Your full name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control name='photoURL' className='bg-light' type="text" placeholder="Photo URL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Working Email</Form.Label>
                        <Form.Control onChange={handleEmail} className='bg-light' type="email" placeholder="Enter email" />
                    </Form.Group>
                    {errors.email && <p className="text-warning">{errors.email}</p>}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control onChange={handlePassword} className='bg-light' type="password" placeholder="Password" required />
                    </Form.Group>
                    {errors.password && <p className="text-warning">{errors.password}</p>}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={(e) => setChecked(e.target.checked)} type="checkbox" label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit" disabled={!checked}>
                        Register
                    </Button>
                    {
                        errors.generalError && <p className="text-warning">{errors.generalError}</p>
                    }
                    <p className='mt-2 text-center'>Already Have an Account? <Link to="/login">Sign in here</Link> </p>
                </Form>
            </div>

        </div>
    );
};

export default Register;