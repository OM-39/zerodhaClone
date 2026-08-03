import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg border-bottom fixed-top" style={{backgroundColor:"white"}}>
                <div class="container p-2">
                    <a class="navbar-brand" href="/"><img src="media/images/logo.svg" alt="Zerodha logo" style={{maxWidth:"20%", marginLeft:"115px"}}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse align-right" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link" to="/signup">Signup</Link>
                            <Link class="nav-link" to="/about">About</Link>
                            <Link class="nav-link" to="/product">Products</Link>
                            <Link class="nav-link" to="/pricing">Pricing</Link>
                            <Link class="nav-link" to="/support">Support</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;