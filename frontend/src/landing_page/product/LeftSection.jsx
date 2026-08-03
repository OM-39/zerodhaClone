import React from 'react';

function LeftSection({imageURL, productName, ProductDescription, tryDemo, learnMore, googlePlay, appleStore}) {
    return ( 
        <>
            <div className="container" style={{paddingTop:"80px"}}>
                <div className="row product-left-section">
                    <div className="col">
                        <img src={imageURL} alt="image" />
                    </div>
                    <div className="col s2">
                        <h2>{productName}</h2>
                        <p>{ProductDescription}</p>
                        <div className="row">
                            <div className="col-6">
                                <a href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="col-6">
                                <a href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="google play logo" /></a>
                            </div>
                            <div className="col-6">
                                <a href={googlePlay}><img src="media/images/appstoreBadge.svg" alt="apple store logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default LeftSection;