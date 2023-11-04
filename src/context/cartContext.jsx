import { createContext, useState } from "react";


export const cartContext = createContext();


export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(celulares, count) {
    let itemAlreadyInCart = cart.findIndex((itemInCart) => itemInCart.id === celulares.id);
    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      celulares.count = count;
      newCart.push(celulares);
      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function priceInCart() {
    let totalPrice = 0;
    cart.forEach((producto) =>(totalPrice = totalPrice + producto.price * producto.cantidad));
    return totalPrice;
  }

  function clear() {
    setCart([]);
  }

  function removeItem() {
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
  }

  return (
    <cartContext.Provider value= {{ clear, cart, addToCart, itemsInCart, removeItem, priceInCart }}>
      {children}
    </cartContext.Provider>
  );
}