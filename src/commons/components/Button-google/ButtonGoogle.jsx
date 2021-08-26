import React from "react";
import "./ButtonGoogle.scss";

export default function ButtonGoogle(props) {
  const { onClick } = props;
  return (
    <button className="btn-google" onClick={onClick}>
      <img src="assets/google-icon.png" alt="" />
      <span>continuar con Google</span>
    </button>
  );
}
