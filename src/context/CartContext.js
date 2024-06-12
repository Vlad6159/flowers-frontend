
import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [favoriteItems,setFavoriteItems] = useState([])

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || '{}';
        setCartItems(cart);
        const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
        setFavoriteItems(favorite);
    }, []);



    return (
        <CartContext.Provider value={{ cartItems, setCartItems, favoriteItems,setFavoriteItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
