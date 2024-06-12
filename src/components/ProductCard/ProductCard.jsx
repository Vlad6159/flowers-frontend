import classes from './ProductCart.module.css'
import MyButton from "@/components/MyButton/MyButton";
import useProductCart from "@/hooks/useProductCart";
import useProductFavorite from "@/hooks/useProductFavorite";
import {useEffect} from "react";

const ProductCard = ({product}) => {

    const {cartProduct, addProductToCart, removeProductFromCart } = useProductCart(product);
    const {favoriteProduct, addProductToFavorite, removeProductFromFavorite} = useProductFavorite(product);
    useEffect(() => {

    }, [cartProduct]);
    useEffect(() => {

    }, [favoriteProduct]);

    return (
        <div className={classes.card}>
            <img className={classes.card__img} src="/product_image.jpg" alt="картинка"/>
            <div className={classes.card__body}>
                <span className={classes.card__title}>{product.name}</span>
                <h3>{product.category.name}</h3>
                <div className={classes.card__row}>
                    <MyButton onClick={favoriteProduct ? () => removeProductFromFavorite(product.id)  : () => addProductToFavorite(product)}>
                        <img className={classes.card__row__img} src={favoriteProduct ? "/heart.png" : "/favorites.png"} alt="Избранное"/>
                    </MyButton>
                    <MyButton  onClick={cartProduct ? () => removeProductFromCart(product.id)  : () => addProductToCart(product)}>{cartProduct ? 'Удалить из корзины' : 'Добавить в корзину'}</MyButton>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;