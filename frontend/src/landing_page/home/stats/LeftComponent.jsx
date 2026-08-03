import React from 'react';

function LeftComponent(props) {
    return ( 
        <>
            <h3 style={{fontSize: "1.25rem"}}>{props.heading}</h3>
            <p className='mt-2 mb-5' style={{fontSize: "1rem"}}>{props.para}</p>
        </>
     );
}

export default LeftComponent;