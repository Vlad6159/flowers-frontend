import React from 'react';
import useProductCart from "@/hooks/useProductCart";
import classes from './CartItems.module.css';

const CartItems = ({product}) => {
    const {removeProductFromCart} = useProductCart(product)
    return (
        <div key={product.id} className={classes.cart__items}>
            <p>{product.name}</p>
            <div className={classes.cart__items__div} onClick={() => removeProductFromCart(product.id)}>
                <p>Удалить</p>
            </div>
        </div>
    );
};

export default CartItems;