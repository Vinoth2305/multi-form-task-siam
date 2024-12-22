import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PersonalInformation from "./Modules/PersonalInformation";
import SkillsAndTechStack from "./Modules/SkillsAndTechStack";
import Confirmation from "./Modules/Confirmation";
import Summary from "./Modules/Summary";
import { ProgressBar } from "./Component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import CandidateList from "./Modules/CandidateList";

function App() {
  const bar = useSelector((state) => state.progressBar);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (bar === 0) {
      navigate("/", { replace: true });
    }
  }, [bar, navigate]);
  const showProgressBar = location.pathname === "/candidate-list";
  return (
    <>
      <div
        className={`${
          !showProgressBar
            ? "d-flex align-items-center justify-content-center container"
            : ""
        }`}
        style={{ minHeight: "100dvh", width: "100%" }}
      >
        <div
          className={`${!showProgressBar ? "card-container" : ""}`}
          style={{ width: !showProgressBar ? "420px" : "100%" }}
        >
          {!showProgressBar && (
            <ProgressBar progressBarCount={3} completedStatus={bar} />
          )}{" "}
          <Routes>
            <Route path="/" element={<PersonalInformation />} />
            <Route path="/skills-and-tech" element={<SkillsAndTechStack />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/candidate-list" element={<CandidateList />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
