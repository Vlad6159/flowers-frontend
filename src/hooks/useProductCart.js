import {useState, useEffect, useContext} from 'react';
import CartContext from "@/context/CartContext";

const useProductCart = (product) => {
    const [cartProduct, setCartProduct] = useState(false);
    const {cartItems,setCartItems} = useContext(CartContext)

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log('Current cart:', cart);
    }, [cartProduct]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productInCart = cart.find(item => item.id === product.id);
        if (productInCart) {
            setCartProduct(true);
        } else {
            setCartProduct(false);
        }
    }, [cartProduct,product.id]);

    const addProductToCart = (product) => {
        let cart = localStorage.getItem('cart');

        if (cart) {
            cart = JSON.parse(cart);
            cart.push(product);
        } else {
            cart = [product];
        }
        setCartItems(cart)
        setCartProduct(true);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const removeProductFromCart = (productId) => {
        let cart = localStorage.getItem('cart');

        if (cart) {
            cart = JSON.parse(cart);
            cart = cart.filter(item => item.id !== productId);
            setCartProduct(false);
            setCartItems(cart)
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };

    return { cartProduct, addProductToCart, removeProductFromCart };
};

export default useProductCart;