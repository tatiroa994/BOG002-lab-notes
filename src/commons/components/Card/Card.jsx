import React from "react";
import "./Card.scss";

function getClassOrientation(orientation) {
  const orientationOptions = {
    vertical: "vertical",
    horizontal: "horizontal",
  };
  if (orientationOptions[orientation]) {
    return orientationOptions[orientation];
  }
  return "";
}

function Card({ children, orientation }) {
  const orientationClass = getClassOrientation(orientation);
  console.log(orientationClass);
  return <div className={`card ${orientationClass}`}>
            {children}
        </div>;
}

export default Card;
