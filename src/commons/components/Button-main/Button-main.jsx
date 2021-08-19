import React from "react";
import './Button-main.scss'

function ButtonMain(props) {
  const { text, type } = props;
  return <button type={type} className="btn-main">{text}</button>;
}

export default ButtonMain;
