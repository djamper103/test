import React, {FC} from 'react';
import style from './index.module.css'
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {RecipeDataType} from '../../types/recipe';
import {useTypesSelector} from '../../hooks/useTypeSelector';
import {useActions} from '../../hooks/useActions';

type FormData = {
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
};

const schema = yup.object({
    strMeal: yup.string().required(),
    strCategory: yup.string().required(),
    strArea: yup.string().required(),
    strInstructions: yup.string().required(),
    strMealThumb: yup.string().required().url(),
  }).required();

export const Modal: FC = ({}) => {

  const {modalActionCreator}=useActions()
  const {isModal} = useTypesSelector(state => state.modalData)

  const onClick = () =>{
    modalActionCreator(!isModal)
  }
  
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => {
            let localRecipe = localStorage.getItem('recipeFavourites')
            let parseLocalRecipe = localRecipe && JSON.parse(localRecipe);
            if(parseLocalRecipe){
              if(Array.isArray(parseLocalRecipe)){
                let filterRecipe = parseLocalRecipe.filter((el:RecipeDataType)=>{
                  return data.strMeal !== el.strMeal
                })
                localStorage.setItem('recipeFavourites', JSON.stringify([data,...filterRecipe]))
              }else{
                localStorage.setItem('recipeFavourites', JSON.stringify([data,parseLocalRecipe]))
              }
            }else{
              localStorage.setItem('recipeFavourites', JSON.stringify(data))
            }
            modalActionCreator(!isModal)
    };

  return (
        <div className={isModal ? style.modalActive : style.modal} onClick={onClick}>
          <div  onClick={(e) => e.stopPropagation()} className={style.containerMain}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.containerForm}>
                <label>Dish name</label>
                <input {...register("strMeal")} />
                <p>{errors.strMeal?.message}</p>

                <label>Category</label>
                <input {...register("strCategory")} />
                <p>{errors.strCategory?.message}</p>

                <label>Dish country</label>
                <input {...register("strArea")} />
                <p>{errors.strArea?.message}</p>

                <label>Recipe</label>
                <input {...register("strInstructions")} />
                <p>{errors.strInstructions?.message}</p>

                <label>Photo</label>
                <input {...register("strMealThumb")} />
                <p>{errors.strMealThumb?.message}</p>

                <input type="submit" className={style.sybmit}/>
            </form>
          </div>
        </div>
  );
};
