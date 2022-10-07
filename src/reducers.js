import { GET_BOX_COLOR } from "./constants";

const initialState = {
    pickedColor: ''
}

export const boxColorReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BOX_COLOR: 
           let pickedColor = action.payload.target.style.backgroundColor;
           return Object.assign({}, state, {pickedColor}); 
        default:
            return state;    
    }
}