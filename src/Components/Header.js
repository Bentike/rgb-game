import React from 'react';
import './Styles/Header.css';


function Header({rgb, bg}) {

  const style = {
    backgroundColor: bg
 }

  return (
    <div className='header' style={style}>
        <h1>THE GREAT</h1>
        <h1>{rgb}</h1>
        <h2>GUESSING GAME</h2>
    </div>
  )
}

export default Header;