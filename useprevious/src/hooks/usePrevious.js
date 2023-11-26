import { useEffect, useRef } from "react";
const usePrevious = (count) => {
  const previous = useRef();
  useEffect(() => {
    previous.current = count;
  }, [count]);
  return previous.current;
};

export default usePrevious;
