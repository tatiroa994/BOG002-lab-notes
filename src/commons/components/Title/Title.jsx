import React from "react";
import './Title.scss'

export default function Title(props) {
  const { text } = props;
  return <p className="title">{text}</p>;
}
