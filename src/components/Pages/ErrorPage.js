import React from 'react';
import { Button } from 'react-bootstrap';
import { FaLaughWink } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={{ height: '100vh' }} className='text-warning d-flex flex-column justify-content-center align-items-center'>
            <FaLaughWink className='fs-1'></FaLaughWink>
            <h1>Error 404!!</h1>
            <p className='fs-3'>Page not found</p>
            <Link to="/">
                <Button variant="info" className='text-white'>Back To Home</Button>
            </Link>
        </div>
    );
};

export default ErrorPage;