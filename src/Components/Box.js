import './Styles/Box.css';
import React from 'react';

function Box({color, handleClick, visibility}) {

  const style = {
    backgroundColor: color,
    visibility: visibility ? 'hidden' : 'visible'
  }

  return (
    <div 
      className='color__box' 
      style={style}
      onClick={handleClick}
    ></div>
  );
}

export default Box;