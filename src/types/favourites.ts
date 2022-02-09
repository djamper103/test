export enum FavouritesActionTypes {
    FAVOURITES_STATUS = "FAVOURITES_STATUS",
}

interface FavouritesAction {
    type: FavouritesActionTypes.FAVOURITES_STATUS;
    payload: boolean;
}


export type FavouritesActions = FavouritesAction


export interface FavouritesState {
    isFavourites: boolean
}