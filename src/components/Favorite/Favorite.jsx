import { useContext } from "react";
import Context from "@/context/Context";
import classes from './Favorite.module.css';
import FavoriteItems from "@/components/FavoriteItems/FavoriteItems";

const Favorite = () => {
    const { favoriteItems } = useContext(Context);
    const favoriteItemsList = Object.values(favoriteItems)
    return (
        <div className={classes.favorite}>
            <h1>Избранное</h1>
            <hr style={{ width: '100%' }} />
            {favoriteItemsList.length !== 0 ? (
                <div>
                    {favoriteItemsList.map((product) => (
                        <FavoriteItems key={product.id} product={product}/>
                    ))}
                </div>
            ) : (
                <p>Нет избранных</p>
            )}
        </div>
    );
};

export default Favorite;
