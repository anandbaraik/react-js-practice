import "./styles.css";
import { useMemo, useState } from "react";

const useMostRepeatativeLetters = (str) => {
  return useMemo(() => {
    const arrStr = str.split("").filter((item) => item != " ");
    const strCount = {};
    for (let i = 0; i < arrStr.length; i++) {
      if (!strCount[arrStr[i]]) {
        strCount[arrStr[i]] = 1;
      } else {
        strCount[arrStr[i]]++;
      }
    }

    let maxChar = [];
    let maxCount = 0;
    for (let key in strCount) {
      if (strCount[key] > maxCount) {
        maxCount = strCount[key];
        maxChar = [key];
      } else if (strCount[key] == maxCount) {
        maxChar.push(key);
      }
    }

    return {
      letter: maxChar,
      count: maxCount,
    };
  }, [str]);
};

export default function App() {
  const [str, setStr] = useState("Hello vijay hello vvv");

  const repeatativeLetters = useMostRepeatativeLetters(str);
  console.log("repeatativeLetters", repeatativeLetters);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
