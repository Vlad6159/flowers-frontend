import React from "react";
import classes from "./SideLinks.module.css";
import ProfileLink from "@/components/ProfileLink/ProfileLink";

const SideLinks = () => {
  return (
    <>
      <div className={classes.sideLinks}>
        <div className={classes.sideLinks__div}>
          <ProfileLink href={"/order/history"}>История заказов</ProfileLink>
        </div>
        <hr className={classes.hr} />
      </div>
    </>
  );
};

export default SideLinks;
