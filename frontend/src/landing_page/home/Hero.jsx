import React from 'react';

function Hero() {
    return ( 
        <div>
            <div className="container">
                <div className="row text-center p-5 m-4">
                    <img src="media/images/homeHero.svg" alt="Home Page Img" className='mb-5' style={{maxHeight:"45vh", marginTop: "70px"}}/>
                    <h1 style={{fontSize: "1.75rem"}}>Invest in everything</h1>
                    <p style={{fontSize:"1.25rem", fontWeight:"400", marginTop: "10px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='btn btn-primary text-center p-2 mt-4 fw-medium' style={{width: "20%", margin: "auto", fontSize: "1.2em", marginBottom: "70px"}} onClick={() => window.location.assign("http://localhost:5174/signup")}>Sign up for free</button>
                </div>
            </div>
        </div>
     );
}

export default Hero;