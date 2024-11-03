import React from 'react';
import NavBar from '../conponents/NavBar';
import Footer from '../conponents/Footer';
import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
       
        <div>
           <Toaster></Toaster>
           <div className='h-16'>
           <NavBar></NavBar>
           </div>
            <div className='min-h-[calc(100vh-292px)] md:w-10/12 mx-auto px-12 py-5'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;