import { useEffect } from 'react';
import Box from  './Components/Box';
import {connect} from 'react-redux';
import {getBoxColor, 
        setGameLevelEasy, 
        setGameLevelHard, 
        resetGame, 
        setColors,
        setTargetColor} from './actions';
import { store } from '.';
import Header from './Components/Header';
import Buttons from './Components/Buttons';
import './App.css';

const mapStateToProps = (state) => {
   return {
      pickedColor: state.pickedColor,
      colors: state.colors,
      message: state.message,
      target: state.targetColor
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
     getColor: (col) => {
      dispatch(getBoxColor(col));
     },

     setEasy: () => {
       dispatch(setGameLevelEasy("easy"));
     },

     setHard: () => {
        dispatch(setGameLevelHard("hard"));
     },

     reset: () => {
       dispatch(resetGame());
     },

     setColor: () => {
       let level = store.getState().level;
       level === "easy" ? dispatch(setColors(4)) : dispatch(setColors(8))
     },

     setTargetColor: (color) => {
        dispatch(setTargetColor(color))
     }

   }
}

function App({getColor, setEasy, setHard, reset, setColor, colors, message, setTargetColor}) {

  useEffect(() => {
     setColor();
  }, [setColor]);

  return (
    <div className="App">
      <Header rgb="255, 230, 180"/>
      <Buttons
        setHard={setHard}
        setEasy={setEasy}
        reset={setColor}
        message={message}
      />
      <div className='box__wrap'>
          {colors.map((color) => {
             return <Box key={color} color={color} handleClick={getColor}/>
          })}
      </div> 
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
