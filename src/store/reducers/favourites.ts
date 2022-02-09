import {FavouritesActions, FavouritesActionTypes, FavouritesState } from "../../types/favourites"


const initialState: FavouritesState = {
    isFavourites: false
}

export const FavouritesReducer = (state = initialState, action: FavouritesActions): FavouritesState => {
    switch (action.type) {
        case FavouritesActionTypes.FAVOURITES_STATUS:
            return {
                isFavourites: action.payload
            }
        default:
            return state
    }
}