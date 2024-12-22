import React, { useEffect, useReducer } from "react";
import {
  Button,
  DropDown,
  Input,
  MultiSelectDropdown,
  showToast,
  TextArea,
} from "../../Component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { candidateList, progressBarStatus, techInfo } from "../../Redux/Action";

const initialState = {
  skills: [],
  experience: "Fresher",
  description: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "skills":
      state = { ...state, skills: [...action.payload] };

      break;
    case "experience":
      state = { ...state, experience: action.payload };
      break;
    case "description":
      state = { ...state, description: action.payload };
      break;

    default:
      state = state;
  }
  return state;
};

function SkillsAndTechStack() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const list1 = useSelector((state) => state.techInfo);
  console.log(list1);
  const dispatc = useDispatch();
  const navigate = useNavigate();
  const Experience = [
    "Fresher",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "6 years",
    "7 years",
    "8 years",
    "9 years",
    "10 years",
  ];
  const handleSelectionChange = (e) => {
    console.log(e.value);

    dispatch({ type: "skills", payload: e.value });
  };
  const handleExperienceChange = (e) => {
    dispatch({ type: "experience", payload: e.target.value });
  };
  const handleDescription = (e) => {
    dispatch({ type: "description", payload: e.target.value });
  };

  const skills = [
    { name: "Java", code: "JV" },
    { name: "Javascript", code: "JS" },
    { name: "Angular Js", code: "AJS" },
    { name: "React Js", code: "RJS" },
    { name: "React Native", code: "RNS" },
  ];

  const handlePrevious = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (state.skills.length !== 0 && state.description.length >= 10) {
      dispatc(techInfo(state));
      dispatc(progressBarStatus(2));
      navigate("/confirmation");
    } else {
      if (state.skills.length === 0) {
        showToast("Please select at least one skill to continue.", "error");
      } else if (state.description.length <= 10) {
        showToast("Description should be minimum 100 chars.", "info");
      }
    }
  };
  useEffect(() => {
    if (list1.length > 0) {
      let data = list1[0];

      dispatch({ type: "skills", payload: data.skills });

      dispatch({ type: "experience", payload: data.experience });

      dispatch({ type: "description", payload: data.description });
    }
  }, []);
  return (
    <div>
      <h6 className="pb-3 pt-3 text-center">Skills and Tech stack</h6>
      <div>
        <MultiSelectDropdown
          heading="Skills"
          value={state.skills}
          onChange={handleSelectionChange}
          options={skills}
          mandatory={true}
        />
      </div>

      <TextArea
        heading={"Describe your tech stack"}
        value={state.description}
        onChange={handleDescription}
        mandatory={true}
      />

      <DropDown
        options={Experience}
        heading={"Experience"}
        value={state.experience}
        onChange={handleExperienceChange}
        mandatory={true}
      />

      <div className="d-flex align-items-center justify-content-between pt-4">
        <Button heading={"Previous"} outline onClick={handlePrevious} />
        <Button heading={"Next"} onClick={handleNext} />
      </div>
    </div>
  );
}

export default SkillsAndTechStack;
