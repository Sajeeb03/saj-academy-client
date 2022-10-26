import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div style={{ height: '100vh' }} className='text-warning d-flex flex-column justify-content-center align-items-center'>
            <h3>We will let you know whenever we have some terms and conditions 😜</h3>
            <Link to="/register">
                <button className='btn btn-primary'>Go Back To Register</button>
            </Link>
        </div>
    );
};

export default Terms;