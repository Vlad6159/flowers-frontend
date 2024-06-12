import { useState, useEffect } from 'react';

const useFavorite = () => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
        setFavoriteItems(favorite);
    }, []);
    return {
        favoriteItems, setFavoriteItems
    };
};

export default useFavorite;