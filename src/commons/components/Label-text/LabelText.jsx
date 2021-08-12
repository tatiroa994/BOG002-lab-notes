import React from "react";
import "./LabelText.scss";

export default function LabelText(props) {
  const { textLabel } = props;
  return <label className="label-text">{textLabel}</label>;
}
