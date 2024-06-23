"use client";
import { useContext } from "react";
import Context from "@/context/Context";
import classes from "./Cart.module.css";
import MyButton from "@/components/MyButton/MyButton";
import { useRouter } from "next/navigation";
import CartItems from "@/components/CartItems/CartItems";

const Cart = ({ setShowCart }) => {
  const { cartItems } = useContext(Context);
  const router = useRouter();
  const cartItemsList = Object.values(cartItems);
  return (
    <div className={classes.cart}>
      <h1>Корзина</h1>
      <hr style={{ width: "100%" }} />
      {cartItemsList.length !== 0 ? (
        <div className={classes.cart__div}>
          {cartItemsList.map((product) => (
            <CartItems key={product.id} product={product} />
          ))}
          <MyButton
            onClick={() => {
              setShowCart(false);
              router.push("/profile/order");
            }}
          >
            Оформить заказ
          </MyButton>
        </div>
      ) : (
        <p>Корзина пуста</p>
      )}
    </div>
  );
};

export default Cart;
