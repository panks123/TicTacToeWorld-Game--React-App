import React from 'react'
import './styles/Players.css'


export default function Players(props) {
  return (
    <div className="container">
        <div className="playersentry">
            <h1 id="phead">Enter the TicTacToe Masters</h1>
            <input type="text" name='player1' id = "player1" placeholder='Enter player1' autoComplete='off'/>
            <input type="text" name='player2' id = "player2" placeholder='Enter player2' autoComplete='off'/>
            <input type="button" onClick= {props.getPlayers} value="Submit"/>
        </div>
    </div>
  )
}
