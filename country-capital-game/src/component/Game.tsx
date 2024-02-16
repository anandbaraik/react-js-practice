import  { FC } from 'react'
import { CountryCapitalMap } from '../types/app.types'
const Game : FC<CountryCapitalMap> = ({countries}) => {
  console.log(countries);
  return (
    <div>Game</div>
  )
}

export default Game