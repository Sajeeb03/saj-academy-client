import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Payments = () => {
    const [purchase, setPurchase] = useState(false)
    const course = useLoaderData();
    const { title, price } = course;
    const handlePurchase = () => {
        toast.success("Purchase Successful");
        setPurchase(true)
    }
    return (
        <div className='container bg-white shadow-lg course-container'>
            <div className='p-4 text-center'>
                <h2>{title}</h2>
                <h2>Price:{price}</h2>
                <Button onClick={handlePurchase} variant='info' className='fw-semibold fs-5'>Purchase NOW!</Button>
                {purchase && <div className='mt-4'>
                    <h1>Thanks For Choosing Our Service</h1>
                    <h1>We Are Working ON the Payment Gateway!</h1>
                </div>}
            </div>
        </div>
    );
};

export default Payments;