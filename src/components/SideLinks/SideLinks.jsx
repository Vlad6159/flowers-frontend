"use client";

import React, { useContext } from "react";
import classes from "./SideLinks.module.css";
import ProfileLink from "@/components/ProfileLink/ProfileLink";
import Context from "@/context/Context";

const SideLinks = () => {
  const { setUserAuth } = useContext(Context);
  return (
    <>
      <div className={classes.sideLinks}>
        <div className={classes.sideLinks__div}>
          <ProfileLink href={"/profile"}>Профиль</ProfileLink>
          <ProfileLink href={"/profile/order/history"}>История заказов</ProfileLink>
          <ProfileLink
            href={"/"}
            onClick={() => {
              setUserAuth(false);
              localStorage.removeItem("token");
            }}
          >
            Выйти
          </ProfileLink>
        </div>
        <hr className={classes.hr} />
      </div>
    </>
  );
};

export default SideLinks;
