import React from "react";
import Label from "@/components/Label/Label";
import Input from "@/components/Input/Input";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__div}>
        <Label forLabel={"surname"}>Фамилия</Label>
        <Input
          type={"text"}
          name={"surname"}
          id={"surname"}
          style={{ marginLeft: "5px" }}
        />
      </div>
      <div className={classes.profile__div}>
        <Label style={{ width: "100%", height: "100%" }} forLabel={"name"}>
          Имя
        </Label>
        <Input
          type={"text"}
          name={"name"}
          id={"name"}
          style={{ marginLeft: "5px" }}
        />
      </div>
    </div>
  );
};

export default Profile;
