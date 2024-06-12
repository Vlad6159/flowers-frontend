import React from 'react';
import useProductCart from "@/hooks/useProductCart";

const CartItems = ({product}) => {
    const {cartProduct, addProductToCart, removeProductFromCart} = useProductCart(product)
    return (
        <div key={product.id}>
            <p>{product.name}</p>
            <div style={{cursor:'pointer'}} onClick={() => removeProductFromCart(product.id)}>
                <p>Удалить</p>
            </div>
        </div>
    );
};

export default CartItems;