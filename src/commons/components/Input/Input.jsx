import React from "react";
import { string, func } from 'prop-types';
import "./Input.scss";

export default function Input(props) {
  const { textInput, typeInput, onChange, value } = props;
  return (
    <input
      className="input-text"
      placeholder={textInput}
      type={typeInput}
      onChange={onChange}
      value={value}
    />
  );
}

Input.propTypes = {
  textInput: string.isRequired,
  typeInput: string.isRequired,
  onChange: func.isRequired,
  value: string.isRequired
}

