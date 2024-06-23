"use client";
import React, { useContext } from "react";
import H1 from "@/components/H1/H1";
import SideLinks from "@/components/SideLinks/SideLinks";
import Context from "@/context/Context";
import ListProductCards from "@/components/ListProductCards/ListProductCards";
import OrderItem from "@/components/OrderItem/OrderItem";

const Page = () => {
  const { cartItems } = useContext(Context);
  const products = Object.values(cartItems);
  return (
    <>
      <H1>История заказов</H1>
      <SideLinks></SideLinks>
      <ListOrderItems></ListOrderItems>
    </>
  );
};

export default Page;
