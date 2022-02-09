import {RecipeData} from '../components/recipeData/index'
import {Favourites} from '../components/favourites/index'


export const routes = [
    {path: "/", element: <RecipeData></RecipeData>, exact: true},
    {path: "/favourites", element: <Favourites></Favourites>, exact: true},
]