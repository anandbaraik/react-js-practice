import { useState } from "react";
import useIsFirstRender from "./hooks/useIsFirstRender";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const isFirstRender = useIsFirstRender(count);
  return (
    <div className="App">
      <h1>useIsFirstRender</h1>
      <div>
        <p> Count : {count}</p>
        <p>is First Render : {String(isFirstRender)}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      </div>
    </div>
  );
}
