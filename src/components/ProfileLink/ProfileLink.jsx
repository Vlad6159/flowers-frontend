import React from "react";
import classes from "./ProfileLink.module.css";
import Link from "next/link";

const ProfileLink = ({ href, children, onClick }) => {
  return (
    <Link href={href} className={classes.profileLink} onClick={onClick}>
      {children}
    </Link>
  );
};

export default ProfileLink;
