import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {useActions} from '../../hooks/useActions';
import {useTypesSelector} from '../../hooks/useTypeSelector';
import {Modal} from '../modal';
import style from './index.module.css'


export const Header: FC = () => {
 
  const {modalActionCreator}=useActions()
  const {isModal} = useTypesSelector(state => state.modalData)
  const {isFavourites} = useTypesSelector(state => state.favouritesData)

  const onClick = () =>{
    modalActionCreator(!isModal)
  }

  return (
    <div className={style.container}>
        <NavLink to="/">Random dish</NavLink>
        <NavLink to="/favourites" className={style.link}>Favourites</NavLink>
      {
        isFavourites &&
        <button onClick={onClick}>
          Add custom dish
        </button>
      }
        <Modal/>
    </div>
  );
};

