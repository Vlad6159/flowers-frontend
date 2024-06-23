import React from "react";
import OrderItem from "@/components/OrderItem/OrderItem";
import classes from "./ListOrderItems.module.css";
import MyButton from "@/components/MyButton/MyButton";
import axios from "axios";
import { backendUrl } from "@/const/const";

const ListOrderItems = ({ products }) => {
  function calculateTotalPrice(products) {
    let totalPrice = 0;

    // Перебираем все товары в корзине и суммируем их цены
    products.forEach((product) => {
      totalPrice += parseInt(product.price);
    });

    // Возвращаем общую стоимость товаров
    return totalPrice;
  }

  const count = 0;
  async function makeOrder() {
    const data = {
      cart: products,
      price: calculateTotalPrice(products),
    };
    const response = await axios.post(backendUrl + "/user/order", data, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(response);
  }
  return (
    <div>
      {products.length !== 0 ? (
        <div className={classes.list__order__items}>
          <p className={classes.list__order__items__title}>Состав заказа:</p>
          {products.map((product) => (
            <OrderItem key={product.id} product={product} />
          ))}
          <p className={classes.list__order__items__title}>
            Цена: {calculateTotalPrice(products)}₽
          </p>
          <MyButton onClick={makeOrder}>Оформить</MyButton>
        </div>
      ) : (
        <div>Корзина пуста, добавьте товара в корзину чтобы оформить заказ</div>
      )}
    </div>
  );
};

export default ListOrderItems;
