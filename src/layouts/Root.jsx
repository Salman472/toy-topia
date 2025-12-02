import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

import Home from '../pages/Home';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-289px)] mt-20 lg:mt-0 '>
                <Outlet/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Root;