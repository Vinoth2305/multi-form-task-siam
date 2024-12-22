import {
  CANDIDATE_LIST,
  COMPLETED_PROGRESS_BAR,
  TECH_INFO,
} from "./ActionType";

const initialState = {
  candidateList: [],
  techInfo: [],
  progressBar: 0,
};

const Reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case CANDIDATE_LIST:
      state = {
        ...state,
        candidateList: [action.payload],
      };
      break;
    case TECH_INFO:
      state = {
        ...state,
        techInfo: [action.payload],
      };
      break;
    case COMPLETED_PROGRESS_BAR:
      console.log(action.payload);
      state = {
        ...state,
        progressBar: action.payload,
      };
      break;
  }
  return state;
};

export default Reducer;
