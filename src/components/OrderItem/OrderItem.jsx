"use client";
import React from "react";
import Image from "next/image";
import classes from "./OrderItem.module.css";
import useProductCart from "@/hooks/useProductCart";

const OrderItem = ({ product }) => {
  const { removeProductFromCart } = useProductCart(product);
  return (
    <div className={classes.order__item}>
      <Image
        src={product.img}
        height={75}
        width={75}
        alt={"картинка"}
        style={{ borderRadius: "15px" }}
      />
      <div className={classes.order__item__div}>
        <div className={classes.order__item__text}>
          Название: {product.name}
        </div>
        <div className={classes.order__item__text}>Цена: {product.price}₽</div>
      </div>
    </div>
  );
};

export default OrderItem;
