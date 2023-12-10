import { useEffect, useState } from 'react'
import './App.css'
import {images} from "./constants/images"
function App() {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const handlePreviousClick = () => {
	setActiveImageIndex(activeImageIndex == 0 ?  images.length -1 : activeImageIndex - 1);
  }
  const handleNextClick = () => {
	setActiveImageIndex(activeImageIndex == images.length - 1 ?  0 : activeImageIndex + 1);
  }
  useEffect(() => {
	const timer = setTimeout(() => {
		handleNextClick();
	}, 3000);
	return () => {
		clearTimeout(timer);
	}
  }, [activeImageIndex]);
  return (
    <>
    	<div className='crousel-container'>
			<button type="button" onClick={() => handlePreviousClick()}>Previous</button>
			<div>
				{
					images.map((img, index) => {
						return <img key={index} src={img} alt='wallpaper'
							className={`img ${activeImageIndex === index ? 'd-block' : 'd-none'}`} loading="lazy"/>
					})
				}
			</div>
			<button type="button" onClick={() => handleNextClick()}>Next</button>
    	</div>
    </>
  )
}

export default App
