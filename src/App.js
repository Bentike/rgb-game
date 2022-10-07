import './App.css';
import Box from  './Components/Box';
import {connect} from 'react-redux';
import {getBoxColor} from './actions';
import { store } from '.';

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
     }
   }
}

function App({getColor}) {
  return (
    <div className="App">
      <h1 className='head'>Color Game</h1>

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
