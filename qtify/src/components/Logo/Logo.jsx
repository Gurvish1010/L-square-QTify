import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="QTify Logo" />
    </div>
  );
}

export default Logo;