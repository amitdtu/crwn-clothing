import React from "react";
import "./form-input.style.scss";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input onChange={handleChange} className="form-input" {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
