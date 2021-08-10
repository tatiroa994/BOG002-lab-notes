import React from "react";
import './Button-main.scss'

function ButtonMain(props) {
  const { text } = props;
  return <button>{text}</button>;
}

export default ButtonMain;
