import { useContext } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header/Header";
import Meals from "./component/Meals/Meals"; 
import CartContext from "./store/cart-context";


const  App = ()  => {
  const ctx  = useContext(CartContext);  
  return (
    <>
     {ctx.showCart && <Cart/>}
      <Header/>
      <Meals />
     </>
  );
}

export default App;
