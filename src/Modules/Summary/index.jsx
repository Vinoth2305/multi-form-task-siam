import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Component";

const Summary = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Disable the back and forward buttons
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };

    // Optional: Clean up on component unmount
    return () => {
      window.onpopstate = null;
    };
  }, []);

  const handleNavigation = () => {
    navigate("/candidate-list");
  };

  return (
    <div className="text-center pt-3">
      <i
        style={{ fontSize: "50px", color: "green" }}
        className="bi bi-check-circle-fill"
      ></i>
      <h4 className="pb-3">Submitted successfully!</h4>
      <Button heading={"Candidate List"} onClick={handleNavigation} block />
    </div>
  );
};

export default Summary;
