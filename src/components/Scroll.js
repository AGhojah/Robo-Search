import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', borderRadius: '20px', height: '780px'}}>
            {props.children}
        </div>
    )
}


export default Scroll;