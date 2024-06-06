import React from 'react';
import classes from "./ListProductCards.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

const ListProductCards = ({products,categories}) => {
    return (
        <div className={classes.cardsList}>
            {products.map((product) =>
                <ProductCard key={product.id} product={product} categories={categories} ></ProductCard>
            )}
        </div>
    );
};

export default ListProductCards;