import React from "react";
import ListProductCards from "@/components/ListProductCards/ListProductCards";
import {backendUrl} from "@/const/const";



const Page =async () => {
  const products = await fetch(backendUrl + "/data")
  const json = await products.json();
  return (
    <>
      <ListProductCards products={json.products} />
    </>
  );
};

export default Page;
