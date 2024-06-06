import React, {useState} from 'react';

const Cart = ({}) => {

    return (
        <div>
            {cart.products.map((product) => (
                <div key={product.id}>{product.name} {product.category}</div>
            ))
            }
        </div>
    );
};

export default Cart;