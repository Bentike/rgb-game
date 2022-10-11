import React from 'react';
import './Styles/Button.css';

function Button({text, handleClick, color}) {
  return (
    <div>
        <button 
          onClick={handleClick} 
          style={{background: color}}
        >
        {text}</button>
    </div>
  );
};

export default Button;