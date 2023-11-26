import { useState } from "react";
import usePrevious from "./hooks/usePrevious";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <div className="App">
      <h1>usePrevious</h1>
      <div>
        <p> Count : {count}</p>
        <p>Previous count : {String(previous)}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      </div>
    </div>
  );
}
