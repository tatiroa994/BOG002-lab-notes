import React from "react";
import { Link } from "react-router-dom";
import "./Link.scss";

export default function LinkRedirect(props) {
  const { href, text } = props;
  return (
    <Link to={href}>
      <p className="link-text">{text}</p>
    </Link>
  );
}
