import './Styles/Box.css';
import React from 'react';

function Box({color, handleClick}) {

  return (
    <div 
      className='color__box' 
      style={{backgroundColor: color}}
      onClick={handleClick}
    ></div>
  );
}

export default Box;