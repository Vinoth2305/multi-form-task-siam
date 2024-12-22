import React from "react";

function CheckBox({ text, onChange, checked }) {
  return (
    <div>
      {" "}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={onChange}
          checked={checked}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          {text}
        </label>
      </div>
    </div>
  );
}

export { CheckBox };
