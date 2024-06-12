import React, { useContext } from "react";
import Context from "@/context/Context";

const Index = () => {
  const { userAuth, setUserAuth } = useContext(Context);
  return (
    <div>
      профиль
      <button
        onClick={() => {
          setUserAuth(false);
        }}
      >
        выйти
      </button>
    </div>
  );
};

export default Index;
