import {Dispatch} from "redux"
import {FavouritesActions, FavouritesActionTypes} from "../../types/favourites"


export const favouritesActionCreator = (payload: boolean) => {
    return async (dispatch: Dispatch<FavouritesActions>) => {
        try {
            dispatch({
                type:  FavouritesActionTypes.FAVOURITES_STATUS,
                payload: payload
            })
        } catch (e) {
        }
    }
}
