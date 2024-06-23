import React from "react";
import OrderItem from "@/components/OrderItem/OrderItem";
import classes from "./ListOrderItems.module.css";
import MyButton from "@/components/MyButton/MyButton";
import axios from "axios";
import { backendUrl } from "@/const/const";
import { useRouter } from "next/navigation";
import useProductCart from "@/hooks/useProductCart";

const ListOrderItems = ({ products }) => {
  const router = useRouter();
  const { setCartItems } = useProductCart();
  function calculateTotalPrice(products) {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += parseInt(product.price);
    });
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
    if (response.status === 200) {
      setCartItems(JSON.parse("{}"));
      router.replace("/");
    } else {
      console.log(response.data.message);
    }
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
