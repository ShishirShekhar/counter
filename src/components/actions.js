// Action Types
export const UPDATE_COUNTER_VALUE = "UPDATE_COUNTER_VALUE";
export const UPDATE_COUNTER_NAME = "UPDATE_COUNTER_NAME";

// Action Creators
export const updateCounterValue = (id, value) => {
  return {
    type: UPDATE_COUNTER_VALUE,
    payload: {
      id,
      value,
    },
  };
};

export const updateCounterName = (id, name) => {
  return {
    type: UPDATE_COUNTER_NAME,
    payload: {
      id,
      name,
    },
  };
};
