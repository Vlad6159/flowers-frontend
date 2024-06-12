import { useContext } from "react";
import CartContext from "@/context/CartContext";
import classes from './Favorite.module.css';

const Favorite = () => {
    const { favoriteItems } = useContext(CartContext);

    return (
        <div className={classes.favorite}>
            <h1>Избранное</h1>
            <hr style={{ width: '100%' }} />
            {favoriteItems.length !== 0 ? (
                <div>
                    {favoriteItems.map((product) => (
                        <div key={product.id}>
                            <p>{product.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Нет избранных</p>
            )}
        </div>
    );
};

export default Favorite;
