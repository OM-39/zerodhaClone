import React from 'react';

function Hero() {
    return (
        <>
            <div className="container text-center border-bottom" style={{marginTop:"180px", paddingBottom:"100px"}}>
                <h1 style={{fontSize:"1.75rem", lineHeight:"1.25", fontWeight:"500"}}>Zerodha Products</h1>
                <p style={{fontSize:"1.25rem ", fontWeight:"400", marginTop:"10px"}}>Sleek, modern, and intuitive trading platforms</p>
                <p style={{lineHeight:"1.8", marginBottom:"15px", }}>Check out our <a href="/" className='text-decoration-none fw-semibold'>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
                    
            </div>
            
        </>
    );
}

export default Hero;