import React from 'react';
import { useState } from 'react';
function CreateTicket() {

    const [open, setOpen] = useState(null);
    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <>
            <div className="container">
                <div className="row" style={{ marginLeft: "100px", marginBottom:"50px"}}>
                    <div className="col-8">
                        <div className="faq-item">
                            <button
                                className="btn border support-btn"
                                onClick={() => toggle(0)}
                            >
                                <span style={{ marginRight: "20px" }}><i class="fa-solid fa-circle-plus fa-lg fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>
                                <span style={{ fontSize: "1rem", fontWeight: "500" }}>Acount Opening</span>
                                <span style={{ marginLeft: "550px" }}><i class="fa-solid fa-chevron-down fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>

                            </button>

                            {open === 0 && (
                                <div className="faq-content support-btn-dropdown border">
                                    <ul>
                                        <li><a href="#">Resident Individual</a></li>
                                        <li><a href="#">Minor</a></li>
                                        <li><a href="#">NRI</a></li>
                                        <li><a href="#">Company, Partnership, HUF and LLP</a></li>
                                        <li><a href="#">Glossary</a></li>
                                    </ul>

                                </div>
                            )}
                        </div>
                        <div className="faq-item">
                            <button
                                className="btn border support-btn"
                                onClick={() => toggle(1)}
                            >
                                <span style={{ marginRight: "20px" }}><i class="fa-solid fa-circle-user fa-lg fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>
                                <span style={{ fontSize: "1rem", fontWeight: "500" }}>Your Zerodha Account</span>
                                <span style={{ marginLeft: "505px" }}><i class="fa-solid fa-chevron-down fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>

                            </button>

                            {open === 1 && (
                                <div className="faq-content support-btn-dropdown border">
                                    <ul>
                                        <li><a href="#">Your Profile</a></li>
                                        <li><a href="#">Account modification</a></li>
                                        <li><a href="#">Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                        <li><a href="#">Nomination</a></li>
                                        <li><a href="#">Transfer and conversion of securities</a></li>
                                    </ul>

                                </div>
                            )}
                        </div>
                        <div className="faq-item">
                            <button
                                className="btn border support-btn"
                                onClick={() => toggle(2)}
                            >
                                <span style={{ marginRight: "20px" }}><i class="fa-brands fa-xing fa-lg fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>
                                <span style={{ fontSize: "1rem", fontWeight: "500" }}>Kite</span>
                                <span style={{ marginLeft: "640px" }}><i class="fa-solid fa-chevron-down fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>

                            </button>

                            {open === 2 && (
                                <div className="faq-content support-btn-dropdown border">
                                    <ul>
                                        <li><a href="#">IPO</a></li>
                                        <li><a href="#">Trading FAQs</a></li>
                                        <li><a href="#">Charts and orders</a></li>
                                        <li><a href="#">Alerts and Nudges</a></li>
                                        <li><a href="#">General</a></li>
                                    </ul>

                                </div>
                            )}
                        </div>
                        <div className="faq-item">
                            <button
                                className="btn border support-btn"
                                onClick={() => toggle(3)}
                            >
                                <span style={{ marginRight: "20px" }}><i class="fa-solid fa-indian-rupee-sign fa-lg fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>
                                <span style={{ fontSize: "1rem", fontWeight: "500" }}>Funds</span>
                                <span style={{ marginLeft: "623px" }}><i class="fa-solid fa-chevron-down fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>

                            </button>

                            {open === 3 && (
                                <div className="faq-content support-btn-dropdown border" style={{ height: "200px" }}>
                                    <ul>
                                        <li><a href="#">Add money</a></li>
                                        <li><a href="#">Withdraw money</a></li>
                                        <li><a href="#">Add bank accounts</a></li>
                                        <li><a href="#">Alerts and Nudges</a></li>
                                    </ul>

                                </div>
                            )}
                        </div>
                        <div className="faq-item">
                            <button
                                className="btn border support-btn"
                                onClick={() => toggle(4)}
                            >
                                <span style={{ marginRight: "20px" }}><i class="fa-solid fa-chart-pie fa-lg fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>
                                <span style={{ fontSize: "1rem", fontWeight: "500" }}>Console</span>
                                <span style={{ marginLeft: "605px" }}><i class="fa-solid fa-chevron-down fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>

                            </button>

                            {open === 4 && (
                                <div className="faq-content support-btn-dropdown border" style={{ height: "270px" }}>
                                    <ul>
                                        <li><a href="/">Portfolio</a></li>
                                        <li><a href="/">Corporate actions</a></li>
                                        <li><a href="/">Funds statement</a></li>
                                        <li><a href="/">Reports</a></li>
                                        <li><a href="/">Profile</a></li>
                                        <li><a href="/">Segments</a></li>
                                    </ul>

                                </div>
                            )}
                        </div>
                        <div className="faq-item">
                            <button
                                className="btn border support-btn"
                                onClick={() => toggle(5)}
                            >
                                <span style={{ marginRight: "20px" }}><i class="fa-solid fa-coins fa-lg fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>
                                <span style={{ fontSize: "1rem", fontWeight: "500" }}>Coin</span>
                                <span style={{ marginLeft: "630px" }}><i class="fa-solid fa-chevron-down fa-canvas-roomy" style={{ color: "rgb(61, 125, 210)" }}></i></span>

                            </button>

                            {open === 5 && (
                                <div className="faq-content support-btn-dropdown border" style={{ height: "270px" }}>
                                    <ul>
                                        <li><a href="/">Mutual funds</a></li>
                                        <li><a href="/">National Pension Scheme (NPS)</a></li>
                                        <li><a href="/">Fixed Deposit (FD)</a></li>
                                        <li><a href="/">Features on Coin</a></li>
                                        <li><a href="/">Payments and Orders</a></li>
                                        <li><a href="/">General</a></li>
                                    </ul>

                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row support-right-1">
                            <div className="col-1" style={{ backgroundColor: "#fff" }}>
                                <div className="support-right-1-line"></div>
                            </div>
                            <div className="col-11">
                                <ul>
                                    <li><a href="/">Latest Intraday leverages and Square-off timings</a></li>
                                    <li><a href="/">Surveillance measure on scrips - July 2026</a></li>
                                </ul>
                            </div>
                        </div>
                        <br />

                        <div className="support-right-2">
                            <table className='border'>
                                <tr className='border fw-normal'>
                                    <th style={{backgroundColor:"#f6f6f6", padding:"10px", fontSize:"1.125rem", fontWeight:"400"}}>Quick links</th>
                                </tr>
                                <tr className='border'>
                                    <td><a href='/'>1. Track account opening</a></td>
                                </tr>
                                <tr className='border'>
                                    <td><a href='/'>2. Track segment activation</a></td>
                                </tr>
                                <tr className='border'>
                                    <td><a href='/'>3. Intraday margins</a></td>
                                </tr>
                                <tr className='border'>
                                    <td><a href='/'>4. Kite user manual</a></td>
                                </tr>
                                <tr className='border'>
                                    <td><a href='/'>5. Learn how to create a ticket</a></td>
                                </tr>
                            </table>
                        </div>



                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateTicket;