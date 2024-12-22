import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

function TextArea({ value, onChange, heading, mandatory }) {
  return (
    <div className="mb-3">
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label fw-semibold"
      >
        {heading}
      </label>
      {mandatory && <span className="text-danger">*</span>}
      <InputTextarea value={value} onChange={onChange} rows={5} cols={43} />
    </div>
  );
}
export { TextArea };
