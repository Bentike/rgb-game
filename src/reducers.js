import { GET_BOX_COLOR, 
         SET_GAME_LEVEL_EASY, 
         SET_GAME_LEVEL_HARD,
         RESET_GAME 
        } from "./constants";

const initialState = {
    pickedColor: '',
    colors: [],
    targetColor: '',
    level: 'easy',
    message: ''
}

export const boxColorReducer = (state = initialState, action) => {
    switch(action.type){
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