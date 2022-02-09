import React, {FC, useEffect} from 'react';
import {useActions} from '../../hooks/useActions';
import {useTypesSelector} from '../../hooks/useTypeSelector';
import {RecipeDataType} from '../../types/recipe';


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
    <div>
        {
          recipeData[0] && <div>
            <div>
            <img src={recipeData[0].strMealThumb} alt="strMealThumb" />
              {recipeData[0].strMeal}
            </div>
            <div>
              {recipeData[0].strArea} : {recipeData[0].strCategory}
            </div>
            <div>
            {recipeData[0].strInstructions}
            </div>
          </div>
        }
        <div>
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

