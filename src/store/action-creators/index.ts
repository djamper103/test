import * as recipeDataFetch from "./recipeDataFetch";
import * as modalActionCreator from './modalAction'
import * as favouritesActionCreator from './favouritesAction'

export default {
    ...recipeDataFetch,
    ...modalActionCreator,
    ...favouritesActionCreator,
}