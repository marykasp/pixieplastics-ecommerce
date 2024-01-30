import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currrentItem) => {
      return accumulator + currrentItem.price * currrentItem.amount;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currrentItem) => {
        return accumulator + currrentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

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

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item,
    );
    // can also find item in cart and use addToCart function

    setCart(newCart);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem.amount < 2) {
      removeFromCart(id);
    } else {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item,
      );
      // find item in cart and use removeFromCart

      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
