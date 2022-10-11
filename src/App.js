import './App.css';
import Box from  './Components/Box';
import {connect} from 'react-redux';
import {getBoxColor, setGameLevelEasy, setGameLevelHard} from './actions';
import { store } from '.';
import Header from './Components/Header';
import Buttons from './Components/Buttons';

const mapStateToProps = (state) => {
   return {
      color: state.pickedColor
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
     getColor: (col) => {
      dispatch(getBoxColor(col));
      console.log(store.getState().pickedColor);
     },

     setEasy: () => {
       dispatch(setGameLevelEasy("easy"));
       console.log(store.getState().level)
     },

     setHard: () => {
        dispatch(setGameLevelHard("hard"));
       console.log(store.getState().level)

     },
   }
}

function App({getColor, setEasy, setHard}) {
  return (
    <div className="App">
      <Header rgb="255, 230, 180"/>
      <Buttons
        setHard={setHard}
        setEasy={setEasy}
      />
      <div className='box__wrap'>
          <Box color="red" handleClick={getColor}/>
          <Box color="purple" handleClick={getColor}/>
          <Box color="green" handleClick={getColor}/>
          <Box color="orange" handleClick={getColor}/>
      </div> 
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
