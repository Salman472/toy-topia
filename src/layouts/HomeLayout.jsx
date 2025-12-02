import React from 'react';
import Home from '../pages/Home';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Home/>
            <Outlet/>
            <Navbar/>
        </div>
    );
};

export default HomeLayout;