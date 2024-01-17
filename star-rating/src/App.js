import { useRef } from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const starState = useRef(0);
  const stars = Array(5).fill(0);
  const selectedRatingHandler = (rating) => {
    setSelectedRating(rating);
    starState.current = rating;
  };
  const hoverRatingHandler = (rating) => {
    setHoverRating(rating);
    setSelectedRating(0);
  };
  const handleMouseOut = () => {
    setHoverRating(0);
    setSelectedRating(starState.current);
  };
  return (
    <div className="App">
      <div>
        {stars?.map((_, index) => {
          return (
            <span
              className={`star ${index + 1 <= hoverRating ? "hover" : ""} ${
                index + 1 <= selectedRating ? "active" : ""
              }`}
              role="button"
              key={index}
              onClick={() => {
                selectedRatingHandler(index + 1);
              }}
              onMouseOver={() => {
                hoverRatingHandler(index + 1);
              }}
              onMouseOut={() => {
                handleMouseOut();
              }}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
}
