import React from 'react';

function Universe() {
    return ( 
        <>
            <div className="container text-center m-5 p-5" style={{fontSize:"1.25rem", fontWeight:"400", marginTop:"10px", lineHeight:"1.8"}}>
                <p>Want to know more about our technology stack? Check out the <a href="/" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            </div>
            <div className="container text-center">
                <h2 style={{fontSize:"1.5rem", lineHeight:"1.5", fontWeight:"500", marginBottom:"20px"}}>The Zerodha Universe</h2>
                <p style={{lineHeight:"1.8", marginBottom:"15px", fontSize:"1rem"}}>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="row">
                    <div className="col-4">
                        <img src="media/images/zerodhaFundhouse.png" alt="fund house logo" style={{height:"55px", marginBottom:"10px", marginTop:"50px"}}/> <br />
                        <span className='text-muted' style={{fontSize:".75rem"}}>Our asset management venture <br />
                                that is creating simple and transparent index <br />
                                funds to help you save for your goals.
                        </span>
                    </div>
                    <div className="col-4">
                        <img src="media/images/sensibullLogo.svg" alt="sensibull logo" style={{height:"55px", marginBottom:"10px", marginTop:"50px"}}/> <br />
                        <span className='text-muted' style={{fontSize:".75rem"}}>Options trading platform that lets you <br />
                                create strategies, analyze positions, and examine <br />
                                data points like open interest, FII/DII, and more. <br />
                        </span>
                    </div>
                    <div className="col-4">
                        <img src="media/images/tijori.svg" alt="tijori logo" style={{height:"55px", marginBottom:"10px", marginTop:"50px"}}/> <br />
                        <span className='text-muted' style={{fontSize:".75rem"}}>Investment research platform <br />
                                that offers detailed insights on stocks, <br />
                                sectors, supply chains, and more. <br />
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="media/images/streakLogo.png" alt="streak logo" style={{height:"55px", marginBottom:"10px", marginTop:"50px"}}/> <br />
                        <span className='text-muted' style={{fontSize:".75rem"}}>Systematic trading platform <br />
                                that allows you to create and backtest <br />
                                strategies without coding. <br />
                        </span>
                    </div>
                    <div className="col-4">
                        <img src="media/images/smallcaseLogo.png" alt="smallcase logo" style={{height:"55px", marginBottom:"10px", marginTop:"50px"}}/> <br />
                        <span className='text-muted' style={{fontSize:".75rem"}}>Thematic investing platform <br />
                                that helps you invest in diversified <br />
                                baskets of stocks on ETFs. <br />
                        </span>
                    </div>
                    <div className="col-4">
                        <img src="media/images/dittoLogo.png" alt="ditto logo" style={{height:"55px", marginBottom:"10px", marginTop:"50px"}}/> <br />
                        <span className='text-muted' style={{fontSize:".75rem"}}>Personalized advice on life <br />
                                and health insurance. No spam <br />
                                and no mis-selling. <br />
                                Sign up for free <br />
                        </span>
                    </div>
                </div>
                <button className='btn btn-primary text-center p-2 fw-medium' style={{width: "20%", margin: "auto", fontSize: "1.2em", marginBottom: "70px", marginTop:"50px"}} onClick={() => window.location.assign("http://localhost:5174/signup")}>Sign up for free</button>
            </div>
        </>
     );
}

export default Universe;