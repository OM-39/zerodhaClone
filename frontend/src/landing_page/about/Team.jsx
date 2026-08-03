import React from 'react';

function Team() {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <h2 className='text-center m-5 pt-5 fw-medium'>People</h2>
                    <div className="col-4 text-center" style={{marginLeft:"140px", marginRight:"0"}}>
                        <img src="media/images/nithinKamath.jpg" alt="Nithin Kamath img" style={{borderRadius:"50%", maxHeight:"55%", marginBottom:"20px"}}/>
                        <h3 style={{fontSize:"1.125rem", fontWeight:"400", marginBottom:"20px"}}>Nithin Kamath</h3>
                        <p className='text-grey'>Founder, CEO</p>
                    </div>
                    <div className="col about-p mt-4">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <a href="/">Homepage</a> / <a href="/">TradingQnA</a> / <a href="/">Twitter</a></p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Team;