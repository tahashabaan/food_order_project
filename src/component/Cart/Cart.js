import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import  Modal  from '../UI/Modal/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';

const Cart = (props) => {

  const ctx = useContext(CartContext);

  const addItemCartHandler = (item, amount) => {
    ctx.onAddItem(item,amount)
  }

  const removeItemCartHandler = (id) => {
    ctx.onRemoveItem(id)
  }
  const totalAmount = `${ctx.totalAmount.toFixed(2)} $`;

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {ctx.cartItem.map((item) => <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addItemCartHandler.bind(null,item,1)}
          onRemove={ctx.onRemoveItem.bind(null,item, item.id)}
          />)}
        </ul>
        <div className={classes.total}>
          <span>totalAmount</span>
          <span>{totalAmount}</span>
       </div>
       <div className={classes.actions}>
        <button  onClick={ctx.onHideCart}
         className={classes['.button--alt']}>
          Close
        </button>
        <button className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  )
}

export default Cart