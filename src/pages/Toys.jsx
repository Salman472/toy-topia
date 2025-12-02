import React from 'react';
import { useLoaderData } from 'react-router';
import AllToys from '../components/AllToys';

const Toys = () => {
    const data=useLoaderData()
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 max-w-7xl mx-auto '>
            {
                data.map(toys=><AllToys toys={toys} key={toys.toyId}/>)
            }
        </div>
    );
};

export default Toys;