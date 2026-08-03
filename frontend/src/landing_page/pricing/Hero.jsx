import React from 'react';

function Hero() {
    return ( 
        <>
            <div className="container text-center">
                <div className="container p-5" style={{marginTop:"125px"}}>
                    <h1 style={{fontSize:"1.75rem", lineHeight:"1.25"}}>Charges</h1>
                    <p style={{fontSize:"1.25rem", fontWeight:"400", marginTop:"10px", color:"#9b9b9b"}}>Free equity investment and flat &#8377;20 intraday and F&O trades</p>
                </div>
                <div className="row" style={{marginLeft:"70px", marginRight:"70px"}}>
                    <div className="col-4">
                        <img src="media/images/pricing0.svg" alt="0 logo" style={{marginBottom:"15px", width:"250px"}}/>
                        <h2  style={{fontSize:"1.75rem", lineHeight:"1.6", marginBottom:"20px"}}>Free equity delivery</h2>
                        <p style={{fontSize:"1rem", fontWeight:"400", marginBottom:"15px", color:"#666", lineHeight:"1.8"}}>All equity delivery investments (NSE, BSE), are absolutely free — &#8377;0 brokerage.</p>
                    </div>
                    <div className="col-4">
                        <img src="media/images/other-trades.svg" alt="20 logo" style={{marginBottom:"15px", width:"250px"}}/>
                        <h2  style={{fontSize:"1.75rem", lineHeight:"1.6", marginBottom:"20px"}}>Intraday and F&O trades</h2>
                        <p style={{fontSize:"1rem", fontWeight:"400", marginBottom:"15px", color:"#666", lineHeight:"1.8"}}>Flat &#8377;20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-4">
                        <img src="media/images/pricingMF.svg" alt="0 logo" style={{marginBottom:"15px", width:"250px"}}/>
                        <h2  style={{fontSize:"1.75rem", lineHeight:"1.6", marginBottom:"20px"}}>Free direct MF</h2>
                        <p style={{fontSize:"1rem", fontWeight:"400", marginBottom:"15px", color:"#666", lineHeight:"1.8"}}>All direct mutual fund investments are absolutely free — &#8377;0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Hero;