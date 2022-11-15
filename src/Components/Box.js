import './Styles/Box.css';
import React from 'react';

function Box({color, handleClick}) {

  const style = {
    backgroundColor: color
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