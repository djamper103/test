import {RecipeDataActions, RecipeDataActionTypes, RecipeDataState} from "../../types/recipe"


const initialState: RecipeDataState = {
    recipeData:[]
}

export const recipeDataReducer = (state = initialState, action: RecipeDataActions): RecipeDataState => {
    switch (action.type) {
        case RecipeDataActionTypes.FETCH_RECIPE_DATA:
            return {
                recipeData: action.payload
            }
        default:
            return state
    }
}