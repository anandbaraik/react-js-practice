import React from 'react'
import {Board} from "./Board";
import GameOver from "./GameOver";
import {GameReset} from "./GameReset";
export const TicTacToe = () => {
  const [tiles, setTiles] = React.useState(Array(9).fill(null));
  return (
    <div>
        <h1>Tic Tac Toe</h1>
        <Board tiles={tiles}/>
        <GameOver/>
        <GameReset/>
    </div>
  )
}
