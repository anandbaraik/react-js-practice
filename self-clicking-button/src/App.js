// Create a self clicking button in react. Button should be clicked every two seconds

import "./styles.css";
import { useRef, useEffect } from "react";

export default function App() {
  const btnEle = useRef(null);

  const clickHandler = () => {
    console.log("clicked");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      btnEle.current.click();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Button clicked on every 2 sec</h1>
      <button ref={btnEle} onClick={clickHandler}>
        Click Me
      </button>
    </div>
  );
}
