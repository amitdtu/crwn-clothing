import React from "react";
import "./custom-button.style.scss";

export default function CustomButton({ children, ...otherProps }) {
  return (
    <div>
      <button className="custom-button" {...otherProps}>
        {children}
      </button>
    </div>
  );
}
