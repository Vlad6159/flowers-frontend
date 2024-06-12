"use client";
import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [favoriteItems, setFavoriteItems] = useState({});
  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserAuth(true);
    }
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    setCartItems(cart);
    const favorite = JSON.parse(localStorage.getItem("favorite") || "{}");
    setFavoriteItems(favorite);
  }, []);

  function exitUser() {
    setUserAuth(false);
    localStorage.removeItem("token");
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        favoriteItems,
        setFavoriteItems,
        userAuth,
        setUserAuth,
        exitUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
