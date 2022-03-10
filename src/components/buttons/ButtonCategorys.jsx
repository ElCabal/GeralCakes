import React from "react";
import "../../style/ButtonCategorys.css";
const ButtonCategorys = ({ children }) => {
  return (
    <button className="btn_hoverbg font-bold p-2 rounded-lg ">
      {children}
    </button>
  );
};

export default ButtonCategorys;
