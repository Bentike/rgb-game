import { GET_BOX_COLOR, 
         SET_GAME_LEVEL_EASY, 
         SET_GAME_LEVEL_HARD,
         RESET_GAME,
         SET_COLORS, 
         SET_MESSAGE,
         CLEAR_MESSAGE,
         SET_TARGET_COLOR,
         SET_BOX_BG
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

// function to set A TargetColor
const setATargetColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
}

// function to set message

const sendMessageToUser = ((a, b) => {
    if(a === b) return "Correct";
    return "Incorrect";
});


const initialState = {
    pickedColor: '',
    colors: [],
    targetColor: '',
    level: 'easy',
    message: ''
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

        case SET_MESSAGE:
            return Object.assign({}, state, {message: sendMessageToUser(state.pickedColor, state.targetColor)});  
        
        case CLEAR_MESSAGE:
            return Object.assign({}, state, {message: ""});    
            
        case SET_TARGET_COLOR:
            return Object.assign({}, state, {targetColor: setATargetColor(state.colors)});    
        
        case RESET_GAME:
            return Object.assign({}, {});
                
        default:
            return state;    
    }
}