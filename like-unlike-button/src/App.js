import { useState } from 'react';
import './App.css';
import {HeartIcon, SpinnerIcon} from "./icons"
function App() {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const handleAction = async () => {
    try {
      setIsFetching(true);
      setError(null);
      const response = await fetch(`https://www.greatfrontend.com/api/questions/like-button`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          action: liked ? 'unlike' : 'like'
        })
      });
      if((response.status >= 200) && (response.status < 300)) {
        setLiked((prev) => !prev);
      } else {
        const res = await response.json();
        setError(res.message);
      }
    } finally {
      setIsFetching((prev) => !prev);
    }
  }

  return (
    <>
      <button
          disabled={isFetching}
          className={`btn ${liked ? 'liked' : ''}`}
          onClick={handleAction}>
          {isFetching ? <SpinnerIcon/> : <HeartIcon/>}
          {liked ? 'Unlike' : 'Like'}
      </button>
      {error && <div className='error'>{error}</div>}
    </>
  );
}

export default App;
