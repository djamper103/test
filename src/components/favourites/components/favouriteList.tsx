import React, {FC} from 'react';
import {RecipeDataType} from '../../../types/recipe';
import style from './favouriteList.module.css'


type FavouritesListProps = {
    item: RecipeDataType;
    deleteFavourite: (value:string) => void
}

export const FavouritesList: FC<FavouritesListProps> = ({
    item,
    deleteFavourite
}) => {
  return (
    <>
        {
            item && 
            <div className={style.container}>
                <div className={style.name}>
                    <h3>{item.strMeal}</h3>
                </div>
                <img src={
                        item.strMealThumb ? item.strMealThumb:
                        `https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_
                        247872612-stock-illustration-no-image-available-icon-vector.jpg`
                    } alt="strMealThumb" className={style.image}
                />
                <button onClick={ () => deleteFavourite(item.strMeal)}>
                    Delete Recipe
                </button>
            </div>
        }
    </>
  );
};

