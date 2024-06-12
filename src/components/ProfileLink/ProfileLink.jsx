import React from "react";
import classes from "./ProfileLink.module.css";
import Link from "next/link";

const ProfileLink = ({ href, children }) => {
  return (
    <Link href={href} className={classes.profileLink}>
      {children}
    </Link>
  );
};

export default ProfileLink;
