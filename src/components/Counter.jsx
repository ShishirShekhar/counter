import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  setCounter,
  setName,
  removeCounter,
} from "../redux/counter/countersAction";

const Counter = ({ id }) => {
  const [updateValue, setUpdateValue] = useState(false);
  const [updateName, setUpdateName] = useState(false);
  const [tempValue, setTempValue] = useState(0);
  const [tempName, setTempName] = useState("");

  const counter = useSelector((state) =>
    state.counters.find((counter) => counter.id === id)
  );

  const dispatch = useDispatch();

  const toggleSet = () => {
    setUpdateValue((prev) => !prev);
    tempValue !== 0 && dispatch(setCounter(id, parseInt(tempValue)));
    setTempValue(0);
  };

  const toggleName = () => {
    setUpdateName((prev) => !prev);
    tempName !== "" && dispatch(setName(id, tempName));
    setTempName("");
  };

  return (
    <div className="counter">
      <h1 className="heading">{counter.name}</h1>
      <input type="number" value={counter.counter} readOnly />
      <div className="row">
        <button onClick={() => dispatch(increaseCounter(id))}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter(id))}>Decrease</button>
      </div>
      <div className="row">
        {updateValue ? (
          <div className="update" style={{ width: "6rem" }}>
            <input
              type="number"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
            />
            <button onClick={toggleSet}>Set</button>
          </div>
        ) : (
          <button onClick={toggleSet}>Set</button>
        )}

        <button onClick={() => dispatch(resetCounter(id))}>Reset</button>
      </div>
      {updateName ? (
        <div className="update">
          <input
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <button onClick={toggleName}>Set</button>
        </div>
      ) : (
        <button onClick={toggleName} style={{ width: "100%" }}>
          Counter Name
        </button>
      )}
      <button
        onClick={() => dispatch(removeCounter(id))}
        className="close"
        style={{ width: "100%" }}
      >
        Close
      </button>
    </div>
  );
};

export default Counter;
