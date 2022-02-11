export enum RecipeDataActionTypes {
    FETCH_RECIPE_DATA = "FETCH_RECIPE_DATA",
}

interface RecipeDataAction {
    type: RecipeDataActionTypes.FETCH_RECIPE_DATA;
    payload: any[];
}

export type RecipeDataActions = RecipeDataAction

export type RecipeDataType = {
    strMeal: string,
    strArea: string,
    strCategory: string,
    strMealThumb: string,
    strInstructions: string,
}

export interface RecipeDataState {
    recipeData: RecipeDataType[]
}