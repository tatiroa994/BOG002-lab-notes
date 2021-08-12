import React from "react";
import "./Input.scss";

export default function Input(props) {
  const { textInput } = props;
  return <input className="input-text" placeholder={textInput} type="text" />;
}
