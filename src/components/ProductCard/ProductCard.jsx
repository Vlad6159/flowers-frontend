import React from 'react';
import classes from './ProductCart.module.css'
import MyButton from "@/components/MyButton/MyButton";

const ProductCard = ({product,categories}) => {
    return (
        <div className={classes.card}>
            <img className={classes.card__img} src="/product_image.jpg" alt="картинка"/>
            <div className={classes.card__body}>
                <span className={classes.card__title}>{product.name}</span>
                    {categories.map((category) => {
                        if (product.category_id === category.id) {
                            return (
                                <h1>{category.name}</h1>
                            );
                        }
                    })}
                        <div className={classes.card__row}>
                    <MyButton>
                        <img className={classes.card__row__img} src="/favorites.png" alt="Избранное"/>
                    </MyButton>
                    <MyButton>Добавить в корзину</MyButton>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;