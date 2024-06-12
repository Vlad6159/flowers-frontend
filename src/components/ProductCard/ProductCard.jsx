"use client";
import classes from "./ProductCart.module.css";
import MyButton from "@/components/MyButton/MyButton";
import useProductCart from "@/hooks/useProductCart";
import useProductFavorite from "@/hooks/useProductFavorite";
import { useContext, useEffect } from "react";
import cartContext from "@/context/Context";

const ProductCard = ({ product }) => {
  const { cartProduct, addProductToCart, removeProductFromCart } =
    useProductCart(product);
  const { favoriteProduct, addProductToFavorite, removeProductFromFavorite } =
    useProductFavorite(product);
  const { cartItems, favoriteItems } = useContext(cartContext);

  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={product.img} alt="картинка" />
      <div className={classes.card__body}>
        <p className={classes.card__title}>{product.name}</p>
        <h3 style={{ fontWeight: "400" }}>{product.price} ₽</h3>
        <div className={classes.card__row}>
          <MyButton
            onClick={
              favoriteItems[product.id]
                ? () => removeProductFromFavorite(product.id)
                : () => addProductToFavorite(product)
            }
          >
            <img
              className={classes.card__row__img}
              src={favoriteItems[product.id] ? "/heart.png" : "/favorites.png"}
              alt="Избранное"
            />
          </MyButton>
          <MyButton
            onClick={
              cartItems[product.id]
                ? () => removeProductFromCart(product.id)
                : () => addProductToCart(product)
            }
          >
            {cartItems[product.id]
              ? "Удалить из корзины"
              : "Добавить в корзину"}
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
