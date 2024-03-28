import React from 'react'
import { Tile } from './Tile'
import Strike from "./Strike";
export const Board = ({tiles}) => {
  console.log(tiles);
  return (
    <div className='board'>
      <Tile value={tiles[0]}/>
      <Tile value={tiles[1]}/>
      <Tile value={tiles[2]}/>
      <Tile value={tiles[3]}/>
      <Tile value={tiles[4]}/>
      <Tile value={tiles[5]}/>
      <Tile value={tiles[6]}/>
      <Tile value={tiles[7]}/>
      <Tile value={tiles[8]}/>
      <Strike/>
    </div>
  )
}
