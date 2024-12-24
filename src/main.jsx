import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Reducer from "./Redux/Reducer.jsx";
import App from "./App.jsx";
import PersonalInformation from "./Modules/PersonalInformation";
import SkillsAndTechStack from "./Modules/SkillsAndTechStack";
import Confirmation from "./Modules/Confirmation";
import Summary from "./Modules/Summary";
import CandidateList from "./Modules/CandidateList";
import "./index.css";
import PageNotFount from "./Modules/PageNotFound/index.jsx";
import "./App.css";

export const store = createStore(Reducer);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <PersonalInformation /> },
        { path: "skills-and-tech", element: <SkillsAndTechStack /> },
        { path: "confirmation", element: <Confirmation /> },
        { path: "summary", element: <Summary /> },
        { path: "candidate-list", element: <CandidateList /> },
        { path: "*", element: <PageNotFount /> },
      ],
    },
  ],
  {
    basename: "/multi-form-task-siam/",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
