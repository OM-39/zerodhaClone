import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './stats/Stats';
import OpenAccount from '../OpenAccount';
import NavBar from '../NavBar';
import Footer from '../Footer';

function HomePage() {
    

    return (
        <>
            <NavBar/>
            <Hero />
            {/* <Awards /> */}
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
            {/* Essential to mount the container so toasts actually show on your page */}
            <ToastContainer /> 
        </>
    );
}

export default HomePage;
