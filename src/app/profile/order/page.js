"use client";
import React, { useContext, useEffect } from "react";
import H1 from "@/components/H1/H1";
import Context from "@/context/Context";
import ListOrderItems from "@/components/ListOrderItems/ListOrderItems";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/");
    }
  }, [router]);

  const { cartItems } = useContext(Context);
  const products = Object.values(cartItems);
  return (
    <>
      <H1>Оформление заказа</H1>
      <ListOrderItems products={products} />
    </>
  );
};

export default Page;
