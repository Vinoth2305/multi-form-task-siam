import React, { useState } from "react";
import { Button, CheckBox, showToast } from "../../Component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { progressBarStatus } from "../../Redux/Action";

function Confirmation() {
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  const [info, setInfo] = useState([]);
  const dispatch = useDispatch();

  const handlePrevious = () => {
    navigate("/skills-and-tech");
  };
  const candidateInfo = useSelector((state) => state.candidateList);
  const techStackInfo = useSelector((state) => state.techInfo);
  const mergingCadiInfoAndTech = [candidateInfo, techStackInfo].reduce(
    (acc, current) => [...acc, ...current],
    []
  );

  const mergedObj = mergingCadiInfoAndTech.reduce((acc, currentObj) => {
    return { ...acc, ...currentObj };
  }, {});
  console.log([mergedObj]);

  const handleCheckBox = (e) => {
    console.log(e.target.value);
    setTerms((prev) => !prev);
  };
  const handleSubmit = () => {
    console.log(terms);

    if (!terms) {
      showToast("terms and condition should be vaild", "info");
    } else {
      dispatch(progressBarStatus(3));
      let usersArray = JSON.parse(localStorage.getItem("users")) || [];

      usersArray.push(mergedObj);
      localStorage.setItem("users", JSON.stringify(usersArray));
      // dispatc(progressBarStatus(3));
      navigate("/summary");

      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
    }
  };

  return (
    <div>
      <h6 className="pb-3 pt-3 text-center">Skills and Tech stack</h6>
      <CheckBox
        text={
          <>
            I agree with{" "}
            <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">
              Terms of Use
            </a>
            {" and "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </>
        }
        onChange={handleCheckBox}
      />

      <div className="d-flex align-items-center justify-content-between pt-4">
        <Button heading={"Previous"} outline onClick={handlePrevious} />
        <Button heading={"Submit"} onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Confirmation;
