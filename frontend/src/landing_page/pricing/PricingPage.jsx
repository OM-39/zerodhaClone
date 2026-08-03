import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import NavBar from '../NavBar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>
            <NavBar />
            <Hero />
            <OpenAccount />
            <Brokerage />
            <Footer />
        </>
     );
}

export default PricingPage;