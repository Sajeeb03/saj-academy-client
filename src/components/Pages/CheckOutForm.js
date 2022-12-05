import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const CheckOutForm = ({ course }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState('');
    const [message, setMessage] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);
    const [loading, setLoading] = useState(true)
    const { price } = course;
    const amount = { total: price };
    useTitle("Payments");
    useEffect(() => {
        fetch(`https://learning-platform-server-sajeeb03.vercel.app/create-payment-intent`, {
            method: "post",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${process.env.REACT_APP_PAYMENT_KEY}`
            },
            body: JSON.stringify(amount)
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [amount])

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log("pay")
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError("");
        }
        // console.log("hello")
        setProcessing(true);
        setMessage("");
        const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );
        console.log(paymentIntent)
        if (cardError) {
            setCardError(cardError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            setMessage("Your Payment is Successful");
            setTransactionId(paymentIntent.id);
            setProcessing(false);
            toast.success("Payment Successful")
        }
    }
    if (loading) {
        return <p>Loading</p>
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424242',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button disabled={!stripe || !clientSecret || processing} className='btn btn-sm btn-primary px-3 mt-3'>Pay</button>
            </form>
            {
                cardError && <p className="text-error">{cardError}</p>
            }
            {
                message && transactionId && <div>
                    <p className='text-success'>{message}</p>
                    <p>TransactionId: {transactionId}</p>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;