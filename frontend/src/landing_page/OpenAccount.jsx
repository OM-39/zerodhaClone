import React from 'react';

function OpenAccount() {
    return ( 
        <>
             <div className="container">
                <div className="row text-center p-5 m-4">
                    <h1 style={{fontSize: "1.75rem"}}>Open a Zerodha account</h1>
                    <p style={{fontSize:"1.25rem", fontWeight:"400", marginTop: "10px"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button className='btn btn-primary text-center p-2 mt-4 fw-medium' style={{width: "20%", margin: "auto", fontSize: "1.2em", marginBottom: "70px"}} onClick={() => window.location.assign("http://localhost:5174/signup")}>Sign up for free</button>
                </div>
            </div>   
        </>
     );
}

export default OpenAccount;