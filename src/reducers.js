import { GET_BOX_COLOR, 
         SET_GAME_LEVEL_EASY, 
         SET_GAME_LEVEL_HARD,
         RESET_GAME,
         SET_COLORS 
        } from "./constants";

//Function to generate Random colors
const generateRandomColors = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// function To generate specific number of random colors
const generateNumberOfColors = (num) => {
  let colors = [];
  for(let i = 0; i < num; i++){
      colors.push(generateRandomColors());
  }
  return colors;
}        


const initialState = {
    pickedColor: 'blue',
    colors: [],
    targetColor: '',
    level: 'easy',
    message: 'Hello'
}

export const boxColorReducer = (state = initialState, action) => {
    switch(action.type){

        case SET_COLORS:
            return Object.assign({}, state, {colors: generateNumberOfColors(action.payload)});

        case GET_BOX_COLOR: 
           // line 15 gives access to the background of the clicked box.
           let pickedColor = action.payload.target.style.backgroundColor;
           return Object.assign({}, state, {pickedColor}); 

        case SET_GAME_LEVEL_EASY:
            return Object.assign({}, state, {level: action.payload});   

        case SET_GAME_LEVEL_HARD:
            return Object.assign({}, state, {level: action.payload});
        
        case RESET_GAME:
            return Object.assign({}, {});
                
        default:
            return state;    
    }
}