import React, {FC} from 'react';
import {RecipeDataType} from '../../../types/recipe';
import style from './favouriteList.module.css'


type FavouritesListProps = {
    item: RecipeDataType;
    index: number;
    deleteFavourite: (value:string) => void
}

export const FavouritesList: FC<FavouritesListProps> = ({
    item,
    index,
    deleteFavourite
}) => {
  return (
    <div>
        {
            item && 
            <div>
                <div>{item.strArea}</div>
                <img src={item.strMealThumb} alt="strMealThumb" className={style.image}/>
                <button onClick={ () => deleteFavourite(item.strMeal)}>
                    delete recipe
                </button>
            </div>
        }
    </div>
  );
};

