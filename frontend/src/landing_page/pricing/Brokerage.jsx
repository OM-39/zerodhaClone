import React from 'react';

function Brokerage() {
    return ( 
        <>
            <div className="container border-top p-5">
                <div className="row">
                    <div className="col-8 p-4">
                        <a href="/" style={{textDecoration:"none"}}><h3 className='fs-4 text-center fw-normal'>Brokerage calculator</h3></a>
                        <ul className='brokerage-ul text-muted mt-4'>
                            <li>Call & Trade and RMS auto-squareoff: Additional charges of &#8377;50 + GST per order.</li>
                            <li>Digital contract notes will be sent via e-mail.</li>
                            <li>Physical copies of contract notes, if required, shall be charged ?20 per contract note. Courier charges apply.</li>
                            <li>For NRI account (non-PIS), 0.5% or R100 per executed order for equity (whichever is lower).</li>
                            <li> For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower).</li>
                            <li>If the account is in debit balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order.</li>
                        </ul>
                    </div>
                    <div className="col-4 p-4">
                        <a href="/" style={{textDecoration:"none"}}><h3 className='fs-4 fw-normal'>List of charges</h3></a>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Brokerage;