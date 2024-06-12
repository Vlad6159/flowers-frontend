// src/app/product/[productId]/page.js

import React from "react";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { backendUrl } from "@/const/const";

const Page = async ({ params }) => {
  const { productId } = params;
  const res = await fetch(`${backendUrl}/product/${productId}`);
  const { product } = await res.json();
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default Page;
