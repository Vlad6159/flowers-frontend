"use client";
import React, { useEffect, useState } from "react";
import { backendUrl } from "@/const/const";
import OrderHistoryItem from "@/components/OrderHistoryItem/OrderHistoryItem";
import classes from "./ListOrderHistory.module.css";

const ListOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrderHistory = async () => {
      const response = await fetch(backendUrl + "/user/order/history", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        const orders = await response.json();
        setOrderHistory(orders.data);
        setLoading(false);
      }
    };
    fetchOrderHistory();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.list__order}>
          {orderHistory.map((order) => (
            <OrderHistoryItem key={order.id} order={order} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListOrderHistory;
