import React from "react";
import "./InputPassword.scss";

export default function InputPassword() {
  return (
    <React.Fragment>
      <input type="password" className="input-password" />
      <div className="img-input"></div>
    </React.Fragment>
  );
}
