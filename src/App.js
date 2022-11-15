import { useEffect } from 'react';
import Box from  './Components/Box';
import {connect} from 'react-redux';
import {getBoxColor, 
        setGameLevelEasy, 
        setGameLevelHard, 
        resetGame, 
        setColors,
        setTargetColor,
        setMessage,
        hideBox,
        clearMessage} from './actions';
import { store } from '.';
import Header from './Components/Header';
import Buttons from './Components/Buttons';
import './App.css';

const mapStateToProps = (state) => {
   return {
      pickedColor: state.pickedColor,
      colors: state.colors,
      newColors: state.newColors,
      message: state.message,
      targetColor: state.targetColor,
      headerBackground: state.headerBg
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
     getColor: (col) => {
      dispatch(getBoxColor(col));
      dispatch(setMessage());
      dispatch(hideBox(col));
     },

     setEasy: () => {
       dispatch(setGameLevelEasy("easy"));
       dispatch(setColors(4));
       dispatch(setTargetColor());
       dispatch(clearMessage());
     },

     setHard: () => {
        dispatch(setGameLevelHard("hard"));
        dispatch(setColors(8));
        dispatch(setTargetColor());
        dispatch(clearMessage());
     },

     reset: () => {
       dispatch(resetGame());
     },

     setColor: () => {
       let level = store.getState().level;
       level === "easy" ? dispatch(setColors(4)) : dispatch(setColors(8));
       dispatch(setTargetColor());
       dispatch(clearMessage());
     },

     setTarget: () => {
        dispatch(setTargetColor())
     }

   }
}

function App({getColor, 
              setEasy, 
              setHard, 
              setColor, 
              headerBackground,
              message, 
              setTarget, 
              targetColor, 
              newColors}){

  useEffect(() => {
     setColor();
     setTarget();
  }, [setTarget, setColor]);
  
  return (
    <div className="App">
      <Header rgb={targetColor} bg={headerBackground}/>
      <Buttons
        setHard={setHard}
        setEasy={setEasy}
        reset={setColor}
        message={message}
      />
      <div className='box__wrap'>
          {newColors.map((color, index) => {
             return <Box key={index} color={color} handleClick={getColor}/>
          })}
      </div> 
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
