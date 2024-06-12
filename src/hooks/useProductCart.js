import {useState, useEffect, useContext} from 'react';
import CartContext from "@/context/CartContext";

const useProductCart = (product) => {
    const [cartProduct, setCartProduct] = useState(false);
    const {cartItems,setCartItems} = useContext(CartContext)

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || '{}';
    }, [cartProduct]);


    const addProductToCart = (product) => {
        let initialCart = JSON.parse(localStorage.getItem('cart') || '{}');
        const cart = {...initialCart,[product.id]: product};

        setCartItems(cart)
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const removeProductFromCart = (productId) => {
        const initialCart = JSON.parse(localStorage.getItem('cart') || '{}');
        delete initialCart[productId];
        setCartItems(initialCart)
        localStorage.setItem('cart', JSON.stringify(initialCart));
    };

    return { cartProduct, addProductToCart, removeProductFromCart };
};

export default useProductCart;