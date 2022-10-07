import './App.css';
import Box from  './Components/Box';

function App() {
  return (
    <div className="App">
       <h1 className='head'>Color Game</h1>
      <div className='box__wrap'>
          <Box color="red"/>
          <Box color="purple"/>
          <Box color="green"/>
      </div> 
    </div>
  );
}

export default App;
