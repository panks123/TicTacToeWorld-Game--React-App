import React from 'react'
import './styles/Navbar.css'

export default function Navbar(props) {
  return (
    <>
        <div className="navbar">
            <div className="logotext">TicTacToeWorld</div>
            <div className="utilities">
              <div className="homeLink" style={{display: props.homeDisplay, marginRight: props.marginRight}}><a href="/">Home</a></div>
              <div className="sound" style={{display: props.display}}><img id ="soundbtn" onClick={props.updateGameSoundOnClick} src={process.env.PUBLIC_URL+"/images/nosound.png"}alt="nosound"/></div>
            </div>
        </div>
    </>
  )
}
