import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    setCounters([...counters, { id: Date.now(), value: 0 }]);
  };

  const removeCounter = (counterId) => {
    const updatedCounters = counters.filter(
      (counter) => counter.id !== counterId
    );
    setCounters(updatedCounters);
  };

  return (
    <div className="app">
      <button className="add" onClick={addCounter}>
        Add Counter
      </button>

      <div className="container">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            removeCounter={removeCounter}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
