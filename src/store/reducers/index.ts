import {combineReducers} from "@reduxjs/toolkit"
import {FavouritesReducer} from "./favourites"
import {modalReducer} from "./modal"
import {recipeDataReducer} from "./recipeData"


export const rootReducer = combineReducers({
    recipeData: recipeDataReducer,
    modalData: modalReducer,
    favouritesData: FavouritesReducer,
})


export type RootState = ReturnType<typeof rootReducer>