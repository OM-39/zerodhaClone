import React from 'react';

function RightSection({imageURL, productName, ProductDescription, learnMore}) {
    return ( 
        <>
            <div className="container" style={{paddingTop:"80px"}}>
                <div className="row product-right-section">
                    <div className="col s2">
                        <h2>{productName}</h2>
                        <p>{ProductDescription}</p>
                        <a href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="col">
                        <img src={imageURL} alt="image" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default RightSection;