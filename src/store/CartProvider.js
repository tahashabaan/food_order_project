import React,{useState, useReducer} from 'react';
import CartContext from './cart-context';

const cartValue = {
  items:[],
  totalAmount:0
}

const cartReducer = (state, action) => {

  if ( action.type === 'ADD' ) {
    const updataTotalAmount = state.totalAmount + action.item.price * action.item.amount;
   
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]

    let updateItems;

    if(existingCartItem){

      const updateItem ={
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem
    } 
    else{
      updateItems = state.items.concat(action.item)
    }

  return {
    items: updateItems,
    totalAmount: updataTotalAmount
  };
  }
  
  if ( action.type === 'REMOVE' ) {

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)

    const existingCartItem = state.items[existingCartItemIndex];

    const updataTotalAmount = state.totalAmount - existingCartItem.price ;

    let updateItems;
    if(existingCartItem.amount === 1){
      updateItems = state.items.filter(item => item.id !== action.id)
    }

    else{
      const updateItem = {
        ...existingCartItem,
        amount:existingCartItem.amount-1
      }

      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem
    }

    return{
      totalAmount:updataTotalAmount,
      items:updateItems
    }
  }

  return {cartValue}
}
const CartProvider = (props) => {
  
   const [showCart, setShowCart] = useState(false);
 
   const [cartState, dispatchCart] = useReducer(cartReducer, cartValue)
 
   const addItemToCartHandler = (items) => {
     dispatchCart({type:'ADD', item:items});
  }
  
  const removeItemToCartHandler = (id) => {
     dispatchCart({type: 'REMOVE', id:id})
 }
 
  const onShowCartHandler = () => {
    setShowCart(true)
  }
 
  const onHideCartHandler = () => {
    setShowCart(false)
  }
 
  return <CartContext.Provider value={{
   cartItem: cartState.items,
   totalAmount: cartState.totalAmount,
   showCart: showCart,
   onAddItem: addItemToCartHandler,
   onRemoveItem: removeItemToCartHandler,
   onShowCart: onShowCartHandler,
   onHideCart: onHideCartHandler,
  }}>
   {props.children}
  </CartContext.Provider>
 }
 
export default CartProvider;