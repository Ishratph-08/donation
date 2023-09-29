import React from 'react';

const Banner = () => {
    return (
        <div className='h-[500vh ] container mx-auto bg-green-200  items-center'>
        <h1 className='text-4xl font-bold text-center  mb-4'>I grow by Helping People in Need</h1>
        <div className=' text-center' >
        <input
         type="search" placeholder="Search here...." 
         className =" h-[7vh] w-[70vh] border-b-2 border-gray-50  px-7 rounded-md shadow-lg  mb-5"
         
         /></div>

       </div>
    );
};

export default Banner;