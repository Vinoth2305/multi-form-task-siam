import React from "react";

function Input({ type, heading, placeholder, onChange, mandatory, value }) {
  return (
    <>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label fw-semibold"
        >
          {heading}
        </label>
        {mandatory && <span className="text-danger">*</span>}
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
}

export { Input };
