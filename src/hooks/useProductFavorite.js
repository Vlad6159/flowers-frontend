import {useContext, useEffect, useState} from 'react';
import CartContext from "@/context/CartContext";

const useProductFavorite = (product) => {
    const [favoriteProduct, setFavoriteProduct] = useState(false);
    const {favoriteItems,setFavoriteItems} = useContext(CartContext)

    useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
        console.log('Current favorite:', favorite);
    }, [favoriteProduct]);
    useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
        const productInFavorite = favorite.find(item => item.id === product.id);
        if (productInFavorite) {
            setFavoriteProduct(true);
        } else {
            setFavoriteProduct(false);
        }
    }, [product.id]);
    function addProductToFavorite(product) {
        let favorite = localStorage.getItem('favorite');

        if (favorite) {
            favorite = JSON.parse(favorite);
            favorite.push(product);
        } else {
            favorite = [product];
        }
        setFavoriteItems(favorite)
        setFavoriteProduct(true);
        localStorage.setItem('favorite', JSON.stringify(favorite));
    }
    function removeProductFromFavorite(productId){
        let favorite = localStorage.getItem('favorite');

        if (favorite) {
            favorite = JSON.parse(favorite);
            favorite = favorite.filter(item => item.id !== productId);
            setFavoriteProduct(false);
            setFavoriteItems(favorite)
            localStorage.setItem('favorite', JSON.stringify(favorite));
        }
    }

    return { favoriteProduct, addProductToFavorite, removeProductFromFavorite };
};

export default useProductFavorite;