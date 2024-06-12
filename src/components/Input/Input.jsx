"use client";
import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, id, name, placeholder, style }) => {
  return (
    <input
      className={classes.input}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default Input;
