import React from 'react'
import './styles/GameContainer.css'

export default function GameContainer(props) {
  return (
    <>
    <div className="container">
        <div className="containerbody">
        <div className="game-container">
            <div className="gamebox">
                <div className="box bl-0 bt-0" onClick={props.handleBoxClick}></div>
                <div className="box bt-0" onClick={props.handleBoxClick}></div>
                <div className="box br-0 bt-0" onClick={props.handleBoxClick}></div>
                <div className="box bl-0" onClick={props.handleBoxClick}></div>
                <div className="box" onClick={props.handleBoxClick}></div>
                <div className="box br-0" onClick={props.handleBoxClick}></div>
                <div className="box bl-0 bb-0" onClick={props.handleBoxClick}></div>
                <div className="box bb-0" onClick={props.handleBoxClick}></div>
                <div className="box br-0 bb-0" onClick={props.handleBoxClick}></div>
            </div>
            <div className="gameinfo">
                <div className="wininfo">
                    <div className="winmsg">
                        {(props.winFlag || props.gameOverFlag) ? (props.winFlag === true ? `${props.chanceFor.x_OR_0 === '0' ? props.player1 : props.player2} Won the Game` : 'No Winner this Time'): `${props.chanceFor.playerName}'s Turn for ${props.chanceFor.x_OR_0}`}
                    </div>
                    <img id="winimg" alt="exited.gif" src={process.env.PUBLIC_URL + "/images/exited.gif"}/>
                </div>
            </div>
        </div>
        <div className="gamereset">
            <button id="resetbtn" onClick={props.handleGameReset}>Game Reset</button>
        </div>
        </div>
    </div>
    </>
  )
}
