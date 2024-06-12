"use client";
import React from "react";
import classes from "./Label.module.css";

const Label = ({ children, forLabel, style }) => {
  return (
    <label className={classes.label} style={style} htmlFor={forLabel}>
      {children}
    </label>
  );
};

export default Label;
