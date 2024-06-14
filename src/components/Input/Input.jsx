"use client";
import React from "react";
import classes from "./Input.module.css";

const Input = ({
  type,
  id,
  name,
  placeholder,
  style,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      {...props}
      className={classes.input}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      style={style}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
