import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProgressBar } from "./Component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const bar = useSelector((state) => state.progressBar);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(bar);

  useEffect(() => {
    if (bar === 0) {
      navigate("/", { replace: true });
    }
  }, [bar, navigate]);

  const showProgressBar = location.pathname === "/candidate-list";

  return (
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
        )}

        <Outlet />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
