import React, {FC, useEffect} from 'react';
import {useActions} from '../../hooks/useActions';
import {useTypesSelector} from '../../hooks/useTypeSelector';
import {RecipeDataType} from '../../types/recipe';
import style from './index.module.css'


export const RecipeData: FC = () => {

  const {recipeDataFetch}=useActions()
  const {recipeData} = useTypesSelector(state => state.recipeData)

  useEffect(()=>{
    recipeDataFetch()
  },[])

  const skip = () =>{
    recipeDataFetch()
  }

  const favourites = () =>{
    let localRecipe = localStorage.getItem('recipeFavourites')
    let parseLocalRecipe = localRecipe && JSON.parse(localRecipe);
    if(parseLocalRecipe){
      if(Array.isArray(parseLocalRecipe)){
        let filterRecipe = parseLocalRecipe.filter((el:RecipeDataType)=>{
          return recipeData[0].strMeal !== el.strMeal
        })
        localStorage.setItem('recipeFavourites', JSON.stringify([recipeData[0],...filterRecipe]))
      }else{
        localStorage.setItem('recipeFavourites', JSON.stringify([recipeData[0],parseLocalRecipe]))
      }
    }else{
      debugger
      localStorage.setItem('recipeFavourites', JSON.stringify(recipeData[0]))
    }
  }

  return (
    <div className={style.container}>
        {
          recipeData[0] && <div>
            <div className={style.dishName}>
              <h3>{recipeData[0].strMeal}</h3>
            </div>
            <div className={style.containerImage}>
              <img src={
                  recipeData[0].strMealThumb ? recipeData[0].strMealThumb:
                      `https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_
                      247872612-stock-illustration-no-image-available-icon-vector.jpg`
                  } alt="strMealThumb" className={style.image}
              />
            </div>
            <div className={style.recipe}>
              {recipeData[0].strInstructions}
            </div>
          </div>
        }
        <div className={style.containerButton}>
          <button onClick={skip}>
            Skip
          </button>
          <button onClick={favourites}>
            like
          </button>
        </div>
    </div>
  );
};

