import React from "react";
import "./InputField.css";

export default function InputField({ title, onChange }) {
  function handleInputChange(e) {
    if (onChange) {
      onChange(e.target.value);
    }
  }

  return (
    <div className="inputField">
      <input
        className="input"
        placeholder={title}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
