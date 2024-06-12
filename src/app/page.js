import React from "react";
import ListProductCards from "@/components/ListProductCards/ListProductCards";
import { backendUrl } from "@/const/const";
import H1 from "@/components/H1/H1";

const Page = async () => {
  const fetchProducts = await fetch(backendUrl + "/data");
  const { products } = await fetchProducts.json();
  return (
    <>
      <H1>Каталог</H1>
      <ListProductCards products={products} />
    </>
  );
};

export default Page;
