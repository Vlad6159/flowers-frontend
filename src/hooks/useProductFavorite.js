import {useContext, useEffect, useState} from 'react';
import Context from "@/context/Context";

const useProductFavorite = (product) => {
    const {favoriteItems,setFavoriteItems} = useContext(Context)

    function addProductToFavorite(product) {
        let initialFavorite = JSON.parse(localStorage.getItem('favorite') || '{}');
        const favorite = {...initialFavorite,[product.id]: product};
        setFavoriteItems(favorite)
        localStorage.setItem('favorite', JSON.stringify(favorite));
    }
    function removeProductFromFavorite(productId){
        let initialFavorite = JSON.parse(localStorage.getItem('favorite') || '{}');
        delete initialFavorite[productId];
        setFavoriteItems(initialFavorite)
        localStorage.setItem('favorite', JSON.stringify(initialFavorite));
    }

    return {addProductToFavorite, removeProductFromFavorite };
};

export default useProductFavorite;