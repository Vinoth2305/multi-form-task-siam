import React from "react";

function RadioButton({ text, onChange, checked, value }) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={onChange}
          checked={checked}
          value={value}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {text}
        </label>{" "}
      </div>
    </>
  );
}

export { RadioButton };
