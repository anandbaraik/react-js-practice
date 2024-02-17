import  { FC } from 'react';
import { CountryCapitalMap } from '../types/app.types'
import { useState, useEffect } from 'react';
import _ from "lodash";
const Game : FC<CountryCapitalMap> = ({countries}) => {
  const [options, setOptions] = useState<string[]>([]);
  useEffect(function onMount() {
    const allOptions = Object.entries(countries).flat();
    setOptions(_.shuffle(allOptions));
  }, []);
  return (
    <div className='game__board'>
      {
        options?.map((option) => {
          return <button key={option} className='option_btn'
                  data-value={option}>
            {option}
          </button>
        })
      }
    </div>
  )
}

export default Game