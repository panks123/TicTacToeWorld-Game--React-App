import React from 'react'
import './styles/Toss.css'

export default function Toss(props) {

  return (
    <>
    <div className="container">
        <div className='tossBody'>
            <h1>Time for Toss</h1>
            <div className="container1">
            
                <div className="tosssection">
                    <div className="head">
                        <div className="player">{props.player1 + "(Heads)"} </div>
                        <div className='vs'><div id ='vs' >vs</div></div>
                        <div className="player">{props.player2 + "(Tails)"}</div>
                    </div>
                    <div className="coin">
                        <div className="heads">
                            <img src={process.env.PUBLIC_URL+"/images/heads.svg"} alt="heads" />
                        </div>
                        <div className="tails">
                            <img src={process.env.PUBLIC_URL+"/images/tails.svg"} alt="tails" />
                        </div>
                    </div>
                    <div className="submit">
                        <input type="button" id="flipbtn" onClick= {props.getTossResult}value="Flip coin" />
                    </div>
                    <div className="tosswinmsg"></div>
                    <div className="tossDoneBtnContainer" style={{display: 'none'}}>
                        <input type="button" id="tossDoneBtn" onClick= {props.updateTossDone}value="Proceed to game"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
