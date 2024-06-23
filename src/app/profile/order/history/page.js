"use client";
import React, { useEffect } from "react";
import H1 from "@/components/H1/H1";
import SideLinks from "@/components/SideLinks/SideLinks";
import { useRouter } from "next/navigation";
import OrderHistory from "@/components/OrderHistory/OrderHistory";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/");
    }
  }, [router]);
  return (
    <>
      <H1>История заказов</H1>
      <SideLinks />
      <OrderHistory />
    </>
  );
};

export default Page;
