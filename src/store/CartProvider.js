import React,{useState, useReducer} from 'react';
import CartContext from './cart-context';

// const cartValue ={
//   items:[],
//   totalAmount:0
// }

// const cartReducer = (state, action) => {

//   if ( action.type === 'ADD' ) {
  


//   }

//   return {cartValue}
// }
const CartProvider = (props) => {
  
   const [cartItem, setCartItem] = useState([]);
   const [totalAmount, setTotalAmount] = useState(0)
   const [showCart, setShowCart] = useState(false);
 
  //  const [cartState, dispatchCart] = useReducer(cartReducer, cartValue)
 
   const addItemToCartHandler = (items,amount) => {
     setCartItem(preItem => {
 
       const existingCartItemIndex = preItem.findIndex(item => item.id === items.id);
 
       const existingCartItem = preItem[existingCartItemIndex];
 
       let updateItems;
 
       if(existingCartItem){
        existingCartItem.amount += amount;
        const updateItem = {
         ...existingCartItem
         }
 
      updateItems =[...preItem];
      updateItems[existingCartItemIndex] = updateItem
       }
       else{
         updateItems = [...preItem,items]
       }
     return updateItems  }) 
     
     // setAmount
     setTotalAmount((preAmount) => {
       preAmount += items.price * items.amount;
       return preAmount;
     })

    //  dispatchCart({type:'ADD', item:items});
 
  }
  const removeItemToCartHandler = (items,id) => {
   setCartItem(preItem => {
     const existingCartItemIndex = preItem.findIndex(item => item.id === id)
 
     const existingCartItem = preItem[existingCartItemIndex]
 
     let updateItems;
 
     if (existingCartItem.amount === 1){
       updateItems = preItem.filter(item => item.id !== id)
     }
 
     else {
       existingCartItem.amount -= 1
       const updateItem = {
         ...existingCartItem
       }
 
       updateItems = [...preItem];
       updateItems[existingCartItemIndex] = updateItem
     }
     return updateItems
   })
 
   setTotalAmount((preAmount) => {
     preAmount -= items.price;
     return preAmount;
   })
   
 }
 
  const onShowCartHandler = () => {
    setShowCart(true)
  }
 
  const onHideCartHandler = () => {
    setShowCart(false)
  }
 
  return <CartContext.Provider value={{
   cartItem:cartItem,
   showCart:showCart,
   onAddItem:addItemToCartHandler,
   onRemoveItem:removeItemToCartHandler,
   onShowCart:onShowCartHandler,
   onHideCart:onHideCartHandler,
   totalAmount
  }}>
   {props.children}
  </CartContext.Provider>
 }


export default CartProvider