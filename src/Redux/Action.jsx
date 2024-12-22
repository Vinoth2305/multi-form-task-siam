import {
  CANDIDATE_LIST,
  COMPLETED_PROGRESS_BAR,
  TECH_INFO,
} from "./ActionType";

//Candidate List
export const candidateList = (data) => {
  return {
    type: CANDIDATE_LIST,
    payload: data,
  };
};
//Skill and Tech
export const techInfo = (data) => {
  return {
    type: TECH_INFO,
    payload: data,
  };
};

//Progress bar status
export const progressBarStatus = (data) => {
  console.log(data);

  return {
    type: COMPLETED_PROGRESS_BAR,
    payload: data,
  };
};
