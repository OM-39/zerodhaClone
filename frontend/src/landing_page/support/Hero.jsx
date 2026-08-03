import React from 'react';

function Hero() {
    return (
        <>
            <div className="container">
                <div className="row" style={{ backgroundColor: '#f6f6f6', marginTop: "70px", marginRight: "0%", marginLeft: "-7vw", height: "150px", width: "100vw" }}>
                    <div className="col-6 text-center mt-5" style={{ fontSize: "1.5rem", marginLeft: "-30px" }}>
                        <h1>Support Portal</h1>
                    </div>
                    <div className="col-6 mt-4" style={{ paddingLeft: "200px" }}>
                        <button className='btn btn-primary text-center p-2 mt-4 fw-medium' style={{ width: "20%", margin: "auto", fontSize: "1.2em", marginBottom: "70px", marginLeft: "3x00px"}}>My tickets</button>
                    </div>
                </div>
                <div className="row" style={{ backgroundColor: '#f6f6f6',marginRight: "0%", marginLeft: "-7vw", height: "80px", width: "100vw", marginBottom:"60px"}}>
                    <form class="container-fluid">
                    <div class="input-group" style={{width:"70vw", paddingLeft:"200px"}}>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={{height:"50px"}}/>
                    </div>
                </form>
                </div>
                
            </div>
        </>
    );
}

export default Hero;