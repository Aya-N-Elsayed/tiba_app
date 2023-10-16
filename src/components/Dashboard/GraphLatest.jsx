// ProgressBar.jsx
import React from 'react';
function ProgressBar({ day, percentage }) {
  // The style for the progress bar
  const style = {
    width: `${percentage}%`,
    backgroundColor: '#2196f3'
  };

  const progressBarStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const dayStyle = {
    width: '100px'
  }

  const barStyle = {
     width :'300px', 
     height :'20px',
     margin: '20px',
     borderRadius :'10px',
     backgroundColor: '#c0dbf0'
  }

  const fillStyle = {
     height :'inherit',
     borderRadius :'inherit',
     transitionProperty : 'width', 
     transitionDuration : '.5s', 
     transitionTimingFunction : 'ease-in-out', 
     backgroundColor :'#328bcd',
     width: `${percentage}%`,
  }

  const percentageStyle = {
     width :'50px',
     marginLeft :'10px'   
  }

  return (
    <div style={progressBarStyle}>
      <span style={dayStyle}>{day}</span>
      <div style={barStyle}  >
        <div style={fillStyle}></div>
      </div>
      <span style={percentageStyle}>{percentage}%</span>
    </div>
  );
}

export default ProgressBar;
