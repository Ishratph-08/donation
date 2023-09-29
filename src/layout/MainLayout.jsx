import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='px-8'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;