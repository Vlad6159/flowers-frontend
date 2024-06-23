"use client";
import React from "react";
import classes from "./OrderHistoryItem.module.css";
import { useRouter } from "next/navigation";

const OrderHistoryItem = ({ order }) => {
  const router = useRouter();
  return (
    <div className={classes.order__item}>
      <p>Заказ №{order.id}</p>
      <p>Цена {order.cost}₽</p>
    </div>
  );
};

export default OrderHistoryItem;
