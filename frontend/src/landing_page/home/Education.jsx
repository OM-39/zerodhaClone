import React from 'react';

function Education() {
    return ( 
        <>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-6">
                        <img src="media/images/education.svg" alt="education img" style={{maxWidth:"80%", maxHeight:"80%"}}/>
                    </div>
                    {/* <div className="col-2"></div> */}
                    <div className="col-6 pt-4">
                        <h2 style={{fontSize:"1.5rem", lineHeight:"1.5"}}>Free and open market education</h2>
                        <p style={{fontSize:"1rem", lineHeight:"1.8", marginBottom:"15px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="/" className='text-decoration-none fw-semibold'>Varsity <i class="fa-solid fa-arrow-right"></i></a>

                        <p style={{fontSize:"1rem", lineHeight:"1.8", marginBottom:"15px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="/" className='text-decoration-none fw-semibold'>Trading Q&A  <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Education;