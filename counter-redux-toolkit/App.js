import { useSelector, useDispatch } from "react-redux";
import { decreament } from "./counterSlice";
import { increament } from "./counterSlice";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counter);
  const incrementHandler = (value) => {
    dispatch(increament(value));
  };
  const decrementHandler = (value) => {
    dispatch(decreament(value));
  };
  return (
    <div className="App">
      <h1>
        -:<u>Counter</u>:-
      </h1>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          incrementHandler(1);
        }}
      >
        Increase By 1
      </button>{" "}
      <button
        onClick={() => {
          incrementHandler(3);
        }}
      >
        Increase By 3
      </button>{" "}
      <button
        onClick={() => {
          decrementHandler(1);
        }}
      >
        Decrease By 1
      </button>{" "}
      <button
        onClick={() => {
          decrementHandler(3);
        }}
      >
        Decrease By 3
      </button>
    </div>
  );
}
