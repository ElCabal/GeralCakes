import { createContext } from "react";

const CartContext = createContext({
  cart: false,
  setCart: () => {},
});

export default CartContext;
