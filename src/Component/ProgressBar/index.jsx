import React from "react";

function ProgressBar({ progressBarCount, completedStatus }) {
  const prCount = Array.from(
    { length: progressBarCount },
    (_, index) => index + 1
  );
  return (
    <div className="d-flex align-items-center justify-content-between">
      {prCount?.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className="step-des"
            style={{
              backgroundColor: index < completedStatus ? "#d42a9c" : "",
              border: `3px solid ${
                index === completedStatus ? "#d42a9c" : "#9c9b9c"
              }`,
            }}
          >
            <div className="step fs-6">{item}</div>
          </div>
          {index !== prCount.length - 1 && (
            <div
              className="progressLine"
              style={{
                backgroundColor:
                  index < completedStatus ? "#d42a9c" : "#9c9b9c",
              }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export { ProgressBar };
