import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  DECREASE,
  INCREASE,
  RESET,
  SET_COUNTER,
  SET_NAME,
} from "./counterTypes";

const initialState = {
  counters: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counters: [
          ...state.counters,
          { id: action.payload.id, name: "Tally Counter", counter: 0 },
        ],
      };

    case REMOVE_COUNTER:
      return {
        ...state,
        counters: state.counters.filter(
          (counter) => counter.id !== action.payload
        ),
      };

    case INCREASE:
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.id === action.payload) {
            return { ...counter, counter: counter.counter + 1 };
          }
          return counter;
        }),
      };

    case DECREASE:
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.id === action.payload) {
            return { ...counter, counter: counter.counter - 1 };
          }
          return counter;
        }),
      };

    case RESET:
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.id === action.payload) {
            return { ...counter, counter: 0 };
          }
          return counter;
        }),
      };

    case SET_COUNTER:
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.id === action.payload.id) {
            return { ...counter, counter: action.payload.value };
          }
          return counter;
        }),
      };

    case SET_NAME:
      return {
        ...state,
        counters: state.counters.map((counter) => {
          if (counter.id === action.payload.id) {
            return { ...counter, name: action.payload.name };
          }
          return counter;
        }),
      };

    default:
      return state;
  }
};

export default counterReducer;
