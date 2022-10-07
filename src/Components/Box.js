import './Styles/Box.css';
import React from 'react';

function Box({color}) {
  return (
    <div className='color__box' style={{backgroundColor: color}}></div>
  );
}

export default Box;