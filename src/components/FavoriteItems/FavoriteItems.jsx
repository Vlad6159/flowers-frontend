import React from 'react';
import classes from './FavoriteItems.module.css';
import useProductFavorite from "@/hooks/useProductFavorite";

const FavoriteItems = ({product}) => {
    const {removeProductFromFavorite} = useProductFavorite(product)
    return (
        <div key={product.id} className={classes.favorite__items}>
            <p>{product.name}</p>
            <div className={classes.favorite__items__div} onClick={() => removeProductFromFavorite(product.id)}>
                <p>Удалить</p>
            </div>
        </div>
    );
};

export default FavoriteItems;