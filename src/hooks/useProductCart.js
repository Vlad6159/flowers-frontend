import { useState, useEffect, useContext } from "react";
import Context from "@/context/Context";

const useProductCart = (product) => {
  const { cartItems, setCartItems } = useContext(Context);

  const addProductToCart = (product) => {
    let initialCart = JSON.parse(localStorage.getItem("cart") || "{}");
    const cart = { ...initialCart, [product.id]: product };

    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeProductFromCart = (productId) => {
    const initialCart = JSON.parse(localStorage.getItem("cart") || "{}");
    delete initialCart[productId];
    setCartItems(initialCart);
    localStorage.setItem("cart", JSON.stringify(initialCart));
  };

  return { setCartItems, addProductToCart, removeProductFromCart };
};

export default useProductCart;
