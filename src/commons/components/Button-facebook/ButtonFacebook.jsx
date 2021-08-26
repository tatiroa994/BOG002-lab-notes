import React from "react";
import "./ButtonFacebook.scss";

export default function ButtonFacebook(props) {
  const { onClick } = props;
  return (
    <button className="btn-facebook" onClick={onClick}>
      <img src="assets/facebook-icon.png" alt="Facebook" />
      <span>continuar con Facebook</span>
    </button>
  );
}
