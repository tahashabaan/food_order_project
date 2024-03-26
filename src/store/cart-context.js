import { createContext } from "react";

const CartContext = createContext({
  cartItem: [],
  showCart: false,
  onAddItem: (item) => {},
  onRemoveItem: (id) => {},
  onShowCart: () => {},
  onHideCart: () => {},
});

export default CartContext;
