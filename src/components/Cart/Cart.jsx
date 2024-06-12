import { useContext } from "react";
import CartContext from "@/context/CartContext";
import classes from './Cart.module.css';
import MyButton from "@/components/MyButton/MyButton";
import { useRouter } from "next/router";
import CartItems from "@/components/CartItems/CartItems";

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const router = useRouter();

    return (
        <div className={classes.cart}>
            <h1>Корзина</h1>
            <hr style={{ width: '100%' }} />
            {cartItems.length !== 0 ? (
                <div className={classes.cart__div}>
                    {cartItems.map((product) => (
                        <CartItems key={product.id} product={product}/>
                    ))}
                    <MyButton onClick={() => { router.push('/profile/order') }}>Оформить заказ</MyButton>
                </div>
            ) : (
                <p>Корзина пуста</p>
            )}
        </div>
    );
};

export default Cart;
