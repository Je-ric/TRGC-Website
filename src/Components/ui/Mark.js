import React from 'react';

const Mark = ({ children }) => {
    const markStyle = {
        display: 'inline-block',
        lineHeight: '0.3em', 
        padding: '5px 15px 25px 0',
        backgroundColor: '#ffb700',
        transform: 'translate(0, -18px) rotate(-5deg)',
        color: '#000', // or white?
        fontSize: '110%',
    };

    return (
        <mark style={markStyle}>
            {children}
        </mark>
    );
};

export default Mark;
