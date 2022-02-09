import {Dispatch} from "redux"
import axios from "axios"
import {RecipeDataActions, RecipeDataActionTypes} from "../../types/recipe"


export const recipeDataFetch = (payload?: any[]) => {
    return async (dispatch: Dispatch<RecipeDataActions>) => {
        try {
            let cityDataAll: any[] = []
                await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
                    .then(response => {
                        cityDataAll.push(response.data.meals)
                    })
            dispatch({
                type: RecipeDataActionTypes.FETCH_RECIPE_DATA,
                payload: cityDataAll[0]
            })
        } catch (e) {
        }
    }
}