import React from "react";

function FilePicker({ heading, onChange, mandatory, fileName }) {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label fw-semibold">
          {heading}
        </label>{" "}
        {mandatory && <span className="text-danger">*</span>}
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={onChange}
        />
        {fileName && (
          <div className="mt-2 text-muted">
            <strong>Selected file: </strong>
            {fileName}
          </div>
        )}
      </div>
    </div>
  );
}

export { FilePicker };
