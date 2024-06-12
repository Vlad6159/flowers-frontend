import classes from './ProductCart.module.css'
import MyButton from "@/components/MyButton/MyButton";
import useProductCart from "@/hooks/useProductCart";
import useProductFavorite from "@/hooks/useProductFavorite";
import {useContext, useEffect} from "react";
import cartContext from "@/context/CartContext";

const ProductCard = ({product}) => {

    const {cartProduct, addProductToCart, removeProductFromCart } = useProductCart(product);
    const {favoriteProduct, addProductToFavorite, removeProductFromFavorite} = useProductFavorite(product);
    const  {cartItems} = useContext(cartContext)
    console.log(cartItems)

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
                    <MyButton  onClick={cartItems[product.id] ? () => removeProductFromCart(product.id)  : () => addProductToCart(product)}>{cartItems[product.id] ? 'Удалить из корзины' : 'Добавить в корзину'}</MyButton>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;