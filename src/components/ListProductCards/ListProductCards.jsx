'use client'
import React from 'react';
import classes from "./ListProductCards.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

const ListProductCards = ({products}) => {
    return (
        <div className={classes.cardsList}>
            {products.map((product) =>
                <ProductCard key={product.id} product={product}/>
            )}
        </div>
    );
};

export default ListProductCards;