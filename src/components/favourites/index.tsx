import React, {FC, useEffect, useState} from 'react';
import { useActions } from '../../hooks/useActions';
import {useTypesSelector} from '../../hooks/useTypeSelector';
import {RecipeDataType} from '../../types/recipe'
import {FavouritesList} from './components/favouriteList';


export const Favourites: FC = () => {

  const {isModal} = useTypesSelector(state => state.modalData)
  const {favouritesActionCreator}=useActions()
  
  const [state,setState] = useState<RecipeDataType[]>([])

  useEffect(()=>{
    const localRecipe = localStorage.getItem('recipeFavourites')
    const parseLocalRecipe = localRecipe && JSON.parse(localRecipe);
    setState(parseLocalRecipe)
    favouritesActionCreator(true)
  },[isModal])

  const exit = ()=>{
    favouritesActionCreator(false)
  }

  useEffect(()=>{
    return () => exit()
  },[])

  const deleteFavourite = (value:string) =>{
    let filterRecipe = state.filter((el:RecipeDataType)=>{
      return el.strMeal !== value
    })
    setState(filterRecipe)
    localStorage.setItem('recipeFavourites', JSON.stringify(filterRecipe))
  }

  return (
    <div>
     {
       state.length > 0 ? state.map((item:RecipeDataType,index) => {
         return <FavouritesList
         key={item.strInstructions}
         item={item}
         index={index}
         deleteFavourite={deleteFavourite}
         />
       }):
       <div>Nothing in favorites</div>
     }
    </div>
  );
};

