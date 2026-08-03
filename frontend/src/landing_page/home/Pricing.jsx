import React from 'react';

function Pricing() {
    return ( 
        <>
            <div className="container">
                <div className="row mt-5 pt-5 ml-0 mb-5" style={{position:"relative"}}>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <h2 style={{fontSize:"1.5rem"}}>Unbeatable pricing</h2>
                        <p style={{fontSize:"1rem"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="/" className='text-decoration-none fw-semibold'>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="col-2">
                        <img src="media/images/pricing0.svg" alt="price 0 img" style={{maxWidth:"70%"}}/>
                        <p style={{left:"-20px", position:"relative", display:"inline-block", fontSize:"10px", lineHeight:"16px", top:"15px"}}>Free account <br /> opening</p>
                    </div>
                    <div className="col-2">
                        <img src="media/images/pricingEquity.svg" alt="price 0 img" style={{maxWidth:"70%"}}/>
                        <p style={{left:"-20px", position:"relative", display:"inline-block", fontSize:"10px", lineHeight:"16px", top:"15px"}}>Free equity <br /> delivery</p>
                    </div>
                    <div className="col-2">
                        <img src="media/images/other-trades.svg" alt="price 0 img" style={{maxWidth:"70%"}}/>
                        <p style={{position:"relative", display:"inline-block", fontSize:"10px", lineHeight:"16px", top:"8px"}}>Intraday and<br />F&O</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Pricing;