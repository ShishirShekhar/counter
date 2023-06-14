import React, { useState } from "react";

const Counter = ({ id, removeCounter }) => {
  const [name, setName] = useState("Tally Counter");
  const [counter, setCounter] = useState(0);
  const [updateValue, setUpdateValue] = useState(false);
  const [updateName, setUpdateName] = useState(false);
  const [tempValue, setTempValue] = useState(0);
  const [tempName, setTempName] = useState("");

  const increaseCounter = () => {
    setCounter((prev) => ++prev);
  };

  const decreaseCounter = () => {
    setCounter((prev) => --prev);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const toggleValue = () => {
    setUpdateValue((prev) => !prev);
  };

  const toggleName = () => {
    setUpdateName((prev) => !prev);
  };

  const updateTempValue = (e) => {
    setTempValue(e.target.value);
  };

  const updateTempName = (e) => {
    setTempName(e.target.value);
  };

  const updateCounterValue = () => {
    setCounter(tempValue);
    toggleValue();
  };

  const updateCounterName = () => {
    tempName ? setName(tempName) : setName("Tally Counter");
    toggleName();
  };

  const closeCounter = () => {
    removeCounter(id);
  };

  return (
    <div className="counter">
      <h1 className="heading">{name}</h1>
      <input type="number" value={counter} readOnly />
      <div className="row">
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>
      </div>
      <div className="row">
        {updateValue ? (
          <div className="update" style={{ width: "6rem" }}>
            <input type="number" value={tempValue} onChange={updateTempValue} />
            <button onClick={updateCounterValue}>Set</button>
          </div>
        ) : (
          <button onClick={toggleValue}>Set</button>
        )}

        <button onClick={resetCounter}>Reset</button>
      </div>
      {updateName ? (
        <div className="update">
          <input type="text" value={tempName} onChange={updateTempName} />
          <button onClick={updateCounterName}>Set</button>
        </div>
      ) : (
        <button onClick={toggleName} style={{ width: "100%" }}>
          Counter Name
        </button>
      )}
      <button
        onClick={closeCounter}
        className="close"
        style={{ width: "100%" }}
      >
        Close
      </button>
    </div>
  );
};

export default Counter;
