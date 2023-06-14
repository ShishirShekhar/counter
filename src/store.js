import { createStore } from "redux";

// Define initial state
const initialState = {
  counters: [{ id: 1, value: 0 }],
};

// Define action types
const ADD_COUNTER = "ADD_COUNTER";
const REMOVE_COUNTER = "REMOVE_COUNTER";
const INCREASE_COUNTER = "INCREASE_COUNTER";
const DECREASE_COUNTER = "DECREASE_COUNTER";
const RESET_COUNTER = "RESET_COUNTER";

// Define action creators
export const addCounter = () => {
  return { type: ADD_COUNTER };
};

export const removeCounter = (counterId) => {
  return { type: REMOVE_COUNTER, payload: counterId };
};

export const increaseCounter = (counterId) => {
  return { type: INCREASE_COUNTER, payload: counterId };
};

export const decreaseCounter = (counterId) => {
  return { type: DECREASE_COUNTER, payload: counterId };
};

export const resetCounter = (counterId) => {
  return { type: RESET_COUNTER, payload: counterId };
};

// Define reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counters: [...state.counters, { id: Date.now(), value: 0 }],
      };
    case REMOVE_COUNTER:
      return {
        ...state,
        counters: state.counters.filter(
          (counter) => counter.id !== action.payload
        ),
      };
    case INCREASE_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.id === action.payload) {
            return {
              ...counter,
              value: counter.value + 1,
            };
          }
          return counter;
        }),
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.id === action.payload) {
            return {
              ...counter,
              value: counter.value - 1,
            };
          }
          return counter;
        }),
      };
    case RESET_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.id === action.payload) {
            return {
              ...counter,
              value: 0,
            };
          }
          return counter;
        }),
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;
