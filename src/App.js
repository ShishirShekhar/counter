import { useSelector, useDispatch } from "react-redux";
import { addCounter } from "./redux/counter/countersAction";
import Counter from "./components/Counter";

const App = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <button className="add" onClick={() => dispatch(addCounter())}>
        Add Counter
      </button>

      <div className="container">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
