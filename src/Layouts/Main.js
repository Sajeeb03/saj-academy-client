import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Pages/Header';

const Main = () => {
    return (
        <>
            <div className=''>
                <Header></Header>
            </div>
            <div style={{ height: '100vh' }} className='bg-light'>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Main;