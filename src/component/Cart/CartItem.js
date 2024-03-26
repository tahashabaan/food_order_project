import React from 'react';
import classes from './CartItem.module.css'

const CartItem = (props) => {
  return (
    <li className={classes.item}>
      <section className={classes.left}>
        <h1>{props.name}</h1>
        <div>
          <span>{props.price} $</span>
          <button>X {props.amount}</button>
        </div>
      </section>
      <section className={classes.actions}>
        <button onClick={props.onRemove}
        className={classes.button}>-</button>
        <button onClick={props.onAdd}>+</button>
      </section>
    </li>
  )
}

export default CartItem