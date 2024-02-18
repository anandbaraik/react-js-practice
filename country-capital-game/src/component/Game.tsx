import  { FC, SyntheticEvent } from 'react';
import { CountryCapitalMap } from '../types/app.types'
import { useState, useEffect } from 'react';
import _ from "lodash";
import classNames from 'classnames';
const Game : FC<CountryCapitalMap> = ({countries}) => {
  const [options, setOptions] = useState<string[]>([]);
  const [selection, setSelection] = useState<string[]>([]);
  const [correctSelections, setCorrectSelections] = useState<string[]>([]);
  const handleOptionSelection = (e: SyntheticEvent) => {
    const {target} = e;
    const selectedOption = target.getAttribute('data-value');
    const newSelection = selection.concat(selectedOption);
    if(newSelection.length === 2) {
      /*
	  * check correctness or incorrectness selection
	  */
	 const [first, second] = newSelection;
      if(countries[first] === second || countries[second] === first) {
		setSelection(newSelection);
		setCorrectSelections((prev) => ([...prev, ...newSelection]));
		setTimeout(() => {
			setSelection([]);
		}, 1000);
      } else {
		setSelection(newSelection);
		setTimeout(() => {
			setSelection([]);
		}, 1000);
	  }
    } else {
      setSelection(newSelection);
    }
  }

  useEffect(function onMount() {
    const allOptions = Object.entries(countries).flat();
    setOptions(_.shuffle(allOptions));
  }, []);
  return (
    <div className='game__board'>
      {
        options?.map((option) => {
          const isSelected = selection.includes(option);
		  const isCorrect = selection.length === 2 && selection.includes(option);
		  const incorrect = selection.length === 2 && !selection.includes(option);
          return <button key={option}
		  			className={classNames('option_btn', isSelected && 'selected', isCorrect && 'correct', incorrect && 'incorrect')}
                  data-value={option} onClick={handleOptionSelection}>
            {option}
          </button>
        })
      }
    </div>
  )
}

export default Game