import React, { useState } from "react";
import "./InputPassword.scss";

export default function InputPassword(props) {
  const { onChangeInput, value } = props;
  const [typeInput, setTypeInput] = useState("password");
  const [typeIcon, setTypeIcon] = useState("isPassword");

  const visibility = () => {
    if (typeInput === "password") {
      setTypeInput("text");
      setTypeIcon("isText");
    } else {
      setTypeInput("password");
      setTypeIcon("isPassword");
    }
  };

  return (
    <div className="password-container">
      <input
        type={typeInput}
        className="input-password"
        placeholder="Ingrese contraseña"
        onChange={onChangeInput}
        value={value}
      />
      <div className={`img-input ${typeIcon}`} onClick={visibility}></div>
    </div>
  );
}
