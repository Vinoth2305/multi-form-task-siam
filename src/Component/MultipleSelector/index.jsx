import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
const MultiSelectDropdown = ({
  heading,
  onChange,
  value,
  options,
  mandatory,
}) => {
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
        <div className="">
          <MultiSelect
            value={value}
            options={options.map((option) => ({
              name: option.name,
              code: option.code,
            }))}
            optionLabel="name"
            onChange={onChange}
            filter
            maxSelectedLabels={3}
            placeholder={`Select ${heading}`}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export { MultiSelectDropdown };
