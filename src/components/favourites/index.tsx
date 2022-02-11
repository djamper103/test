import React, {FC, useEffect, useState} from 'react';
import { useActions } from '../../hooks/useActions';
import {useTypesSelector} from '../../hooks/useTypeSelector';
import {RecipeDataType} from '../../types/recipe'
import {FavouritesList} from './components/favouriteList';
import style from './index.module.css'


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
    <div className={style.container}>
     {
       state.length > 0 ? state.map((item:RecipeDataType) => {
         return <FavouritesList
         key={item.strInstructions}
         item={item}
         deleteFavourite={deleteFavourite}
         />
       }):
       <div className={style.text}>Nothing in favorites</div>
     }
    </div>
  );
};

