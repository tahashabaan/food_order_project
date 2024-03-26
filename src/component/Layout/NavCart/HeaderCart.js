import React, { useContext } from 'react'
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cart-context';
import Button from '../../UI/Button/Button';
import classes from './HeaderCart.module.css';
import MealsItemForm from '../../Meals/MealsItem/MealsItemForm';


const HeaderCart = (props) => {

  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.cartItem.reduce((curNum, item) => {
    return curNum + item.amount
  },0)
   return (
    <Button className={classes.cart} 
      onClick={ctx.onShowCart}>

      <span className={classes.icon} >
        <CartIcon/>
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>

    </Button>
  )
}

export default HeaderCart;