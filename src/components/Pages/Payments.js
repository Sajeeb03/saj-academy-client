import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import "../../styles/payments.css"
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_KEY)
const Payments = () => {
    const course = useLoaderData();
    const { title, price } = course;

    return (
        <div className='container bg-white shadow-lg course-container mb-4'>
            <div className='p-4 text-center'>
                <h2>{title}</h2>
                <h2>Price:${price}</h2>
                <div className='pay-form'>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm course={course} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payments;