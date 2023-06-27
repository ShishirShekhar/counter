import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  DECREASE,
  INCREASE,
  RESET,
  SET_COUNTER,
  SET_NAME,
} from "./counterTypes";

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
    payload: { id: Date.now() },
  };
};

export const removeCounter = (counterID) => {
  return {
    type: REMOVE_COUNTER,
    payload: counterID,
  };
};

export const increaseCounter = (counterID) => {
  return {
    type: INCREASE,
    payload: counterID,
  };
};

export const decreaseCounter = (counterID) => {
  return {
    type: DECREASE,
    payload: counterID,
  };
};

export const resetCounter = (counterID) => {
  return {
    type: RESET,
    payload: counterID,
  };
};

export const setCounter = (counterID, value = 1) => {
  return {
    type: SET_COUNTER,
    payload: {
      id: counterID,
      value: value,
    },
  };
};

export const setName = (counterID, value = "Tally Calculator") => {
  return {
    type: SET_NAME,
    payload: {
      id: counterID,
      name: value,
    },
  };
};
