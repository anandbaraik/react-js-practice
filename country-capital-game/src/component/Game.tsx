import  { FC, SyntheticEvent } from 'react';
import { CountryCapitalMap } from '../types/app.types'
import { useState, useEffect } from 'react';
import _ from "lodash";
import classNames from 'classnames';

interface GamePropType {
	countries : CountryCapitalMap
}
const Game : FC<GamePropType> = ({countries}) => {

  const [options, setOptions] = useState<string[]>([]);
  const [selection, setSelection] = useState<string[]>([]);
  const [correctSelections, setCorrectSelections] = useState<string[]>([]);
  const [matchedOption, setMatchedOption] = useState<string[]>([]);

  const handleOptionSelection = (e: SyntheticEvent) => {
	const target = e.target as HTMLInputElement;
    const selectedOption = target.getAttribute('data-value');
    const newSelection = selection.concat(selectedOption || "");

    if(newSelection.length === 2) {
      /*
	  * check correctness or incorrectness selection
	  */
	 const [first, second] = newSelection;
      if(countries[first] === second || countries[second] === first) {
		setSelection(newSelection);
		setCorrectSelections((prev) => ([...prev, ...newSelection]));
		setTimeout(function reset() {
			setMatchedOption((prev) => ([...prev, ...newSelection]));
			setSelection([]);
			setCorrectSelections([]);
		}, 1000);
      } else {
		setSelection(newSelection);
		setTimeout(function reset() {
			setSelection([]);
		}, 1000);
	  }
    } else {
      setSelection(newSelection);
    }
  }

  const resetGameHandler = () => {
	setMatchedOption([]);
  }

  useEffect(function onMount() {
    const allOptions = Object.entries(countries).flat();
    setOptions(_.shuffle(allOptions));
  }, []);

  if(matchedOption.length === options.length) {
	return (
		<div>
			<h1 className='mb-0 pb-0'>Congratulations!</h1>
			<button className='option_btn' onClick={resetGameHandler}>Reset game</button>
		</div>
	);
  }

  return (
    <div className='game__board'>
      {
        options?.map((option) => {
			if(_.includes(matchedOption, option)) {
				return null;
			}
          	const isSelected = _.includes(selection, option) || _.includes(correctSelections, option);
		    const isCorrect = _.includes(correctSelections, option);
		    const isIncorrect = selection.length == 2 && isSelected && !isCorrect;
          return (
		  		<button key={option}
		  			className={
						classNames(
							'option_btn',
							isSelected && 'selected',
							isCorrect && 'correct', isIncorrect && 'incorrect'
						)
					}
                  data-value={option} onClick={handleOptionSelection}
				  disabled={selection.length == 2}>
            		{option}
          		</button>
		  	);
        })
      }
    </div>
  )
}

export default Game