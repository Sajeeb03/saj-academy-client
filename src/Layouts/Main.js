import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Pages/Footer';
import Header from '../components/Pages/Header';

const Main = () => {
    return (
        <div className='bg-light'>
            <div className=''>
                <Header></Header>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className='bg-white shadow-lg'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;