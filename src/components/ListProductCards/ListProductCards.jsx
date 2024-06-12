"use client";
import React, { useContext } from "react";
import classes from "./ListProductCards.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import Context from "@/context/Context";

const ListProductCards = ({ products }) => {
  return (
    <>
      <div className={classes.cardsList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ListProductCards;
