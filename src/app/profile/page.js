"use client";

import React, { useContext } from "react";
import Context from "@/context/Context";
import H1 from "@/components/H1/H1";
import Profile from "@/components/Profile/Profile";

const Index = () => {
  const { exitUser } = useContext(Context);
  return (
    <>
      <H1>Профиль</H1>
      <Profile />
    </>
  );
};

export default Index;
