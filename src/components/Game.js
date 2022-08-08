import React from 'react'
import GameContainer from './GameContainer'

export default function Game(props) {
  return (
    <>
      <GameContainer chanceFor = {props.turn === 'X' ? {playerName: props.player1, x_OR_0: props.turn} : {playerName: props.player2, x_OR_0:"0"}} 
        handleBoxClick = {props.handleBoxClick} handleGameReset = {props.gameReset} winFlag = {props.winFlag} gameOverFlag = {props.gameOverFlag} player1 = {props.player1} player2 = {props.player2}/>
    </>
  )
}
