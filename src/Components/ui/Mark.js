const Mark = ({ children, 
                color = 'black', 
                backgroundColor = '#ffb700' }) => {
    const markStyle = {
        display: 'inline-block',
        lineHeight: '0.3em', 
        padding: '5px 15px 25px 0',
        backgroundColor: backgroundColor,
        transform: 'translate(0, -18px) rotate(-5deg)',
        color: color, 
        fontSize: '110%',
        textShadow: `
            0 1px 2px rgba(0,0,0,0.3),
            0 2px 4px rgba(0,0,0,0.25),
            0 4px 6px rgba(0,0,0,0.2)
            `
    };

    return (
        <mark style={markStyle}>
            {children}
        </mark>
    );
};

export default Mark;
