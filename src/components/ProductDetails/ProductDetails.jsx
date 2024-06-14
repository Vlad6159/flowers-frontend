"use client";

import React, { useContext } from "react";
import classes from "./ProductDetails.module.css";
import MyButton from "@/components/MyButton/MyButton";
import Context from "@/context/Context";
import useProductCart from "@/hooks/useProductCart";
import useProductFavorite from "@/hooks/useProductFavorite";
import cartContext from "@/context/Context";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const { cartProduct, addProductToCart, removeProductFromCart } =
    useProductCart(product);
  const { favoriteProduct, addProductToFavorite, removeProductFromFavorite } =
    useProductFavorite(product);
  const { cartItems, favoriteItems } = useContext(cartContext);
  return (
    <div className={classes.productDetails}>
      <div className={classes.productDetails__div}>
        <Image
          src={product.img}
          width={400}
          height={400}
          alt="картинка"
          style={{ borderRadius: "30px" }}
        />
        <div className={classes.productDetails__div__div}>
          <p className={classes.productDetails__div__div__p}>{product.name}</p>
          <h3 style={{ fontWeight: "400" }}>{product.price} ₽</h3>
          <div className={classes.productDetails__div__div__div}>
            <MyButton
              onClick={
                favoriteItems[product.id]
                  ? () => removeProductFromFavorite(product.id)
                  : () => addProductToFavorite(product)
              }
            >
              <img
                className={classes.productDetails__div__div__div__img}
                src={
                  favoriteItems[product.id] ? "/heart.png" : "/favorites.png"
                }
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
    </div>
  );
};

export default ProductDetails;
