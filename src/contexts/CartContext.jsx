import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if item is already in cart
    const cartItem = cart.find((item) => item.id === id);
    // if item is already in cart then update that items amount
    // if not then just return new list of items in cart with product added at end with amount set to 1
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        // find repeated item and update the amount
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      // new cart with updated amount for repeated item
      setCart(newCart);
    } else {
      // add new item to end of cart
      setCart([...cart, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
