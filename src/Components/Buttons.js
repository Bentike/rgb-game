import React from 'react';
import Button from './Button';
import './Styles/Buttons.css';

function Buttons({setHard, setEasy, reset, message}) {
  return (
    <div className='buttons'>
      <div className='reset'>
        <Button text='New Colors' color='green' handleClick={reset}/>
        <p className='message'>{message}</p>
      </div>
      <div className='level'>
        <Button text='EASY' color='green' handleClick={setEasy}/>
        <Button text='HARD' color='orange' handleClick={setHard}/>
      </div>
    </div>
  )
}

export default Buttons;