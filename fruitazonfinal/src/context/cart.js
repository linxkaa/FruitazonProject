import React, { useEffect, useState, createContext } from "react";
import localCart from "../utils/localCart";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [cartItems, setCartItems] = useState(0);
  const [cookiesCart, setcookiesCart] = useState([]);

  useEffect(() => {
    // let newCartItems = cart.reduce((total, cartItem) => {
    //   return (total += cartItem.amount);
    // }, 0);
    // setCartItems(newCartItems);
    // let newTotal = cart.reduce((total, cartItem) => {
    //   return (total += cartItem.amount * cartItem.price);
    // }, 0);
    // newTotal = parseFloat(newTotal.toFixed(2));
    // setTotal(newTotal);
    var cookieCartlist = cookies.get("cart_list");

    setcookiesCart(cookieCartlist);
  }, []);

  function countAmount(id) {
    var result = {};
    var count = 0;
    var arrayKeys = [];
    cookiesCart.forEach((x) => (result[x] = (result[x] || 0) + 1));
    arrayKeys = Object.keys(result);
    count = arrayKeys.find((e) => parseInt(e) == id);
    if (count == id) {
      return result[`${id}`];
    }
  }

  const removedItem = (id) => {
    var filteredAry = cookiesCart.filter((e) => e !== id);
    cookies.set("cart_list", filteredAry, { path: "/" });
    var cookieCartlist = cookies.get("cart_list");
    setcookiesCart(cookieCartlist);
  };
  // const removeItem = (id) => {
  //   return setCart([...cart].filter((item) => item.id !== id));
  // };
  // const increaseAmount = (id) => {
  //   const newCart = [...cart].map((item) => {
  //     return item.id === id
  //       ? { ...item, amount: item.amount + 1 }
  //       : { ...item };
  //   });
  //   setCart(newCart);
  // };
  // const decreaseAmount = (id, amount) => {
  //   if (amount === 1) {
  //     removeItem(id);
  //     return;
  //   } else {
  //     const newCart = [...cart].map((item) => {
  //       return item.id === id
  //         ? { ...item, amount: item.amount - 1 }
  //         : { ...item };
  //     });
  //     setCart(newCart);
  //   }
  // };
  // const addToCart = (prods) => {
  //   console.log(prods);
  //   const { id, img, title, price } = prods;
  //   const item = [...cart].find((item) => item.id === id);
  //   if (item) {
  //     increaseAmount(id);
  //     return;
  //   } else {
  //     const newItem = { id, img, title, price, amount: 1 };
  //     const newCart = [...cart, newItem];
  //     setCart(newCart);
  //   }
  // };
  // const clearCart = () => {
  //   setCart([]);
  // };
  return (
    <CartContext.Provider
      value={{
        // cart,
        // total,
        // cartItems,
        // removeItem,
        // increaseAmount,
        // decreaseAmount,
        // addToCart,
        // clearCart,
        countAmount,
        removedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
