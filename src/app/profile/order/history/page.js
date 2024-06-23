"use client";
import React, { useContext } from "react";
import H1 from "@/components/H1/H1";
import SideLinks from "@/components/SideLinks/SideLinks";
import Context from "@/context/Context";
import ListOrderItems from "@/components/ListOrderItems/ListOrderItems";

const Page = () => {
  const { cartItems } = useContext(Context);
  const products = Object.values(cartItems);
  console.log(products);
  return (
    <>
      <H1>История заказов</H1>
      <SideLinks></SideLinks>
    </>
  );
};

export default Page;
