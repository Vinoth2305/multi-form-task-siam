import React, { useEffect, useReducer, useState } from "react";
import {
  Button,
  FilePicker,
  Input,
  RadioButton,
  showToast,
} from "../../Component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { candidateList, progressBarStatus } from "../../Redux/Action";

const initialState = {
  name: "",
  gender: "Male",
  dob: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      state = { ...state, name: action.payload };
      break;
    case "gender":
      state = { ...state, gender: action.payload };
      break;
      break;
    case "dob":
      state = { ...state, dob: action.payload };
      break;
    default:
      state = state;
  }
  return state;
};

function PersonalInformation() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [gen, setGender] = useState(["Male", "Female", "Other"]);
  const navigate = useNavigate();
  const dispatc = useDispatch();
  const list = useSelector((state) => state.candidateList);

  //to prefill the filed
  useEffect(() => {
    if (list.length > 0) {
      let data = list[0];
      dispatch({ type: "name", payload: data.name });
      dispatch({ type: "gender", payload: data.gender });
      dispatch({ type: "dob", payload: data.dob });
    }
  }, []);

  //User Name
  const handleName = (e) => {
    const value = e.target.value;
    const alphabets = /^[A-Za-z]+$/;
    if (alphabets.test(value)) {
      dispatch({ type: "name", payload: value });
    }
  };

  //gender
  const handleGender = (val) => {
    dispatch({ type: "gender", payload: val });
  };

  //DOB
  const handleDob = (e) => {
    dispatch({ type: "dob", payload: e.target.value });
  };

  //Personal info - while click Next
  const handleClick = () => {
    if (state.name.length > 2 && state.dob !== "") {
      dispatc(candidateList(state));
      dispatc(progressBarStatus(1));
      navigate("/skills-and-tech");
    } else {
      if (state.name.length === 0) {
        showToast("Name should be at least 3 characters", "error");
      } else if (state.name.length < 3) {
        showToast("Name should be at least 3 characters", "info");
      } else if (state.dob === "") {
        showToast("Please the Date of Birth", "error");
      }
    }
  };
  console.log(state);

  return (
    <div>
      <h5 className="text-center pt-3">Personal Information</h5>
      <Input
        heading={"Name"}
        type={"text"}
        placeholder={"Enter your Name"}
        value={state.name || ""}
        onChange={(e) => handleName(e)}
        mandatory={true}
      />
      <div className="mb-3">
        <label className="form-label fw-semibold">Gender</label>
        <span className="text-danger">*</span>

        {gen.map((items, index) => (
          <div key={index}>
            <RadioButton
              text={items}
              onChange={() => handleGender(items)}
              value={state.gender || "Male"}
              checked={state.gender === items}
            />
          </div>
        ))}
      </div>
      <Input
        heading={"Date of Birth"}
        type={"date"}
        value={state.dob || ""}
        onChange={(e) => handleDob(e)}
        mandatory={true}
      />
      <div className="pt-4 d-flex justify-content-end">
        <Button heading={"Next"} onClick={handleClick} />
      </div>
    </div>
  );
}

export default PersonalInformation;
