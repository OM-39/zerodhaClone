import React from 'react';
import LeftComponent from './LeftComponent';

function Stats() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-4 pl-3 ml-3">
                    <h2 className='mb-5' style={{fontSize: "1.5rem"}}>Trust with confidence</h2>

                    <LeftComponent heading= "Customer-first always" para="That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India."/>

                    <LeftComponent heading = "No spam or gimmicks" para = "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies." />                    

                    <LeftComponent heading = "The Zerodha universe" para = "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs." />

                    <LeftComponent heading = "Do better with mone" para = "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money." />
                
                
                </div>
                <div className="col-7">
                    <img src="media/images/ecosystem.png" alt="Ecosystem img" style={{maxWidth: "90%", width:"auto", maxHeight:"88%"}}/>
                    <div className="row text-center fw-semibold mt-3">
                        <div className="col-2"></div>
                        <div className="col-4"><a href="/" className='text-decoration-none icon-link icon-link-hover'>Explore our products <i class="fa-solid fa-arrow-right"></i></a></div>
                        <div className="col-3"><a href="/" className='text-decoration-none'>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;