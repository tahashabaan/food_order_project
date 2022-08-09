import React from 'react';
import HeaderCart from '../NavCart/HeaderCart';
import classes from './Header.module.css';
import meals from '../../../assests/meals.jpg'


const Header = (props) => {
  return (
  <>
   <header className={classes.head}>
    <h1>ReactMeals</h1>
    <HeaderCart />
   </header>
   <div className={classes['main-image']}>
    <img src={meals} alt='mealsImage'/>
   </div>
 </>
  )
}

export default Header