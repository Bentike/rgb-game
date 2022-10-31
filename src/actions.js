import { GET_BOX_COLOR, 
         SET_GAME_LEVEL_EASY, 
         SET_GAME_LEVEL_HARD,
         RESET_GAME,
         SET_COLORS
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

export const resetGame = () => {
    return {
        type: RESET_GAME
    }
}

export const setColors = (number) => {
   return {
        type: SET_COLORS,
        payload: number
   }
}