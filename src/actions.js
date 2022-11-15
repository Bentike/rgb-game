import { GET_BOX_COLOR, 
         SET_GAME_LEVEL_EASY, 
         SET_GAME_LEVEL_HARD,
         SET_COLORS,
         SET_MESSAGE,
         SET_TARGET_COLOR,
         CLEAR_MESSAGE,
         HIDE_BOX,
         SET_HEADER_BG
         } from "./constants";

export const getBoxColor = (color) => {
    return {
        type: GET_BOX_COLOR,
        payload: color
    }
};

export const setGameLevelEasy = (level) => {
    return {
        type: SET_GAME_LEVEL_EASY,
        payload: level
    }
}

export const setGameLevelHard = (level) => {
    return {
        type: SET_GAME_LEVEL_HARD,
        payload: level
    }
}

export const setColors = (number) => {
   return {
        type: SET_COLORS,
        payload: number
   }
}

export const setMessage = () => {
    return {
        type: SET_MESSAGE
    }
}

export const clearMessage = () => {
    return {
        type: CLEAR_MESSAGE
    }
}

export const setTargetColor = () => {
    return {
        type: SET_TARGET_COLOR
    }
}

export const hideBox = (color) => {
   return {
       type: HIDE_BOX,
       payload: color
   }
}

export const setHeaderBg = (color) => {
    return {
        type: SET_HEADER_BG,
        payload: color
    }
}
