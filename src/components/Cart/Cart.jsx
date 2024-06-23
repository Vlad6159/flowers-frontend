"use client";
import { useContext } from "react";
import Context from "@/context/Context";
import classes from "./Cart.module.css";
import MyButton from "@/components/MyButton/MyButton";
import { useRouter } from "next/navigation";
import CartItems from "@/components/CartItems/CartItems";

const Cart = ({ setShowCart }) => {
  function calculateTotalPrice(products) {
    let totalPrice = 0;

    // Перебираем все товары в корзине и суммируем их цены
    products.forEach((product) => {
      totalPrice += parseInt(product.price);
    });

    // Возвращаем общую стоимость товаров
    return totalPrice;
  }
  const { cartItems } = useContext(Context);
  const router = useRouter();
  const cartItemsList = Object.values(cartItems);
  return (
    <div className={classes.cart}>
      <h1>Корзина</h1>
      <hr style={{ width: "100%" }} />
      {cartItemsList.length !== 0 ? (
        <>
          <div className={classes.cart__div}>
            {cartItemsList.map((product) => (
              <CartItems key={product.id} product={product} />
            ))}
          </div>
          <p>Сумма корзины: {calculateTotalPrice(cartItemsList)}₽</p>
          <MyButton
            onClick={() => {
              setShowCart(false);
              router.push("/profile/order");
            }}
          >
            Оформить заказ
          </MyButton>
        </>
      ) : (
        <p>Корзина пуста</p>
      )}
    </div>
  );
};

export default Cart;
