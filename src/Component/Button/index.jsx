import React from "react";

function Button({ heading, onClick, outline, block }) {
  return (
    <div className={`${block ? "d-grid" : ""}`}>
      <button
        type="button"
        className={`btn ${outline ? "textDark" : "text-white"} px-4`}
        style={{
          background: outline ? "" : "#d42a9c",
          border: "2px solid #d42a9c",
        }}
        onClick={onClick}
      >
        {heading}
      </button>
    </div>
  );
}

export { Button };
