import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
         <>
            <div className="container">
                <div className="row text-center p-5 m-4">
                    <h1 style={{ fontSize: "1.25rem", marginTop:"50px"}}>404 Not Found</h1>
                    <p style={{ fontSize: "1rem", fontWeight: "400", marginTop: "10px" }}>We couldn’t find the page you were looking for. 
                        <br />Visit <Link to="/">Zerodha’s home page</Link></p>
                    
                </div>
            </div>
        </>
    )
}

export default NotFound;