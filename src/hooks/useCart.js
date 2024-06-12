import {useEffect, useState} from "react";

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

        useEffect(() => {
            const cart = JSON.parse(localStorage.getItem('cart')) || '{}';
            setCartItems(cart);
        }, [cartItems]);
    return {
        cartItems, setCartItems
    };
};

export default useCart;