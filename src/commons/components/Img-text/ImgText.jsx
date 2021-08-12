import React from "react";
import "./ImgText.scss";

export default function ImgText(props) {
  const { imgUrl } = props;
  return (
    <div className="logo-container">
      <img className="image" src={imgUrl} alt="" />
      <p className="title">Notas & Notas</p>
    </div>
  );
}
