// ProgressBar.jsx
import React from 'react';
export function GraphLatest({ day, percentage }) {
    // The style for the progress bar
    const style = {
        width: `${percentage}%`,
        backgroundColor: '#2196f3'
    };

    const progressBarStyle = {
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'column'
    };

    const dayStyle = {
        width: '150px',
        color: '#858A8D',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '16px',
        marginBottom: '0px'


    }

    const barStyle = {
        width: '300px',
        height: '20px',
        // margin: '20px',
        borderRadius: '10px',
        backgroundColor: '#c0dbf0',
        marginTop:'10px'
    }

    const fillStyle = {
        height: 'inherit',
        borderRadius: 'inherit',
        transitionProperty: 'width',
        transitionDuration: '.5s',
        transitionTimingFunction: 'ease-in-out',
        backgroundColor: '#328bcd',
        width: `${percentage}%`,
        marginTop:'0px'
    }

    const percentageStyle = {
        width: '70px',
        marginRight: `${percentage}%`,
        color: '#328BCD',
        marginTop: '10px',
        marginBottom: '20px'
    }

    return (

 
            <div style={progressBarStyle}>
                <p style={dayStyle}>{day}</p>
                <div style={barStyle}  >
                    <div style={fillStyle}></div>
                </div>
                <p style={percentageStyle}>{percentage}%</p>
            </div>          
    );
}

