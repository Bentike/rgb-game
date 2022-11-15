import { GET_BOX_COLOR, 
         SET_GAME_LEVEL_EASY, 
         SET_GAME_LEVEL_HARD,
         SET_COLORS, 
         SET_MESSAGE,
         CLEAR_MESSAGE,
         SET_TARGET_COLOR,
         HIDE_BOX,
         SET_HEADER_BG
        } from "./constants";
        
import { generateNumberOfColors, setATargetColor, sendMessageToUser } from "./Components/Functions/HelperFuncs";

const initialState = {
    pickedColor: '',
    colors: [],
    newColors: [],
    targetColor: '',
    level: 'easy',
    message: '',
    headerBg: 'steelblue'
}

export const boxColorReducer = (state = initialState, action) => {
    switch(action.type){

        case SET_COLORS:
            return Object.assign({}, state, {
                colors: generateNumberOfColors(action.payload),
                newColors: [...state.colors]
            });

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
            return Object.assign({}, state, {targetColor: setATargetColor(state.newColors)});
            
        case SET_HEADER_BG :
            return Object.assign({}, state, {headerBg: action.payload});    
        
        case HIDE_BOX:
            let newColor = state.newColors;
            let clickedBoxBg = action.payload.target.style.backgroundColor;
            let index = newColor.indexOf(clickedBoxBg);
            if(state.message === "Incorrect") newColor[index] = "rgb(35, 35, 35)";
            else{
                for(let i = 0; i < newColor.length; i++){
                    newColor[i] = clickedBoxBg;
                }
                state.headerBg = clickedBoxBg;
            }
            return Object.assign({}, state, {newColors: newColor});
                
        default:
            return state;    
    }
}