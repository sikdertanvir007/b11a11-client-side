import React from 'react';
import {  Outlet, useNavigation } from 'react-router';

import { ToastContainer } from 'react-toastify';

import Loading from '../pages/Loading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const HomeLayout = () => {
    const {state} =useNavigation();
    return (
        <div>
            <header><Navbar></Navbar></header>
            
            <main>
                {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} 
            </main>
            <footer><Footer></Footer></footer>
            <ToastContainer />
        </div>
    );
};

export default HomeLayout;