import React from 'react';
import ErrorFile from '../assets/error-404.png'
import { Link } from 'react-router';
import useTitle from '../dynamicTitle/useTitle';
const ErrorPage = () => {
    useTitle('Error Page')
    return (
        <div className='space-y-4'>
            <div className='flex justify-center'><img src={ErrorFile} alt="" /></div>
            <div className='text-center space-y-4'>
                <h1 className='text-xl font-bold md:text-3xl lg:text-5xl'>Oops, page not found!</h1>
                <p className='text-lg fons'>The page you are looking for is not available.</p>
                <Link to={'/'} className='relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-400/50 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 '>Go Back</Link>
            </div>
        </div>
        
    );
};

export default ErrorPage;