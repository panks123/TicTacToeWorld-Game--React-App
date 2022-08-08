import React, { useState } from 'react';
import './App.css';
import Players from './components/Players';
import Navbar from './components/Navbar';
import Toss from './components/Toss';
import Game from './components/Game';
import Footer from './components/Footer';

const bgmusic = new Audio(process.env.PUBLIC_URL + '/sounds/background.mp3');
const clicktone = new Audio(process.env.PUBLIC_URL +'/sounds/mouseclick.mp3')
const winmusic = new Audio(process.env.PUBLIC_URL +'/sounds/win.mp3')
const gameovermusic = new Audio(process.env.PUBLIC_URL +'/sounds/gameover.wav')

function App() {
  const [player1,setPlayer1] = useState("Player1");
  const [player2,setPlayer2] = useState("Player2");
  const [gotPlayersFlag, setGotPlayersFlag] = useState(false)
  const [tossDone, setTossDone] = useState(false)
  const [player1TossWinFlag, setplayer1TossWinFlag] = useState(false)
  const [winFlag, setWinFlag] = useState(false);
  const [gameOverFlag, setGameOverFlag] = useState(false);
  const [turn, setTurn] = useState('X');

  var gameSound = false;

  function getPlayers(e){
    // /* Funtion : To get the Players name from input fields */
    e.preventDefault();
    let name1 = document.getElementById('player1').value
    let name2 = document.getElementById('player2').value
    setPlayer1(name1 === ""? "Player1" : name1.length>7 ? name1.slice(0,7) : name1);
    setPlayer2(name2 === ""?"Player2": name2.length>7 ? name2.slice(0,7) : name2);
    setGotPlayersFlag(true);
  }

  function getTossResult(e){
    /* Function : To handle the "Flip coin" button and get Toss Result */
    e.preventDefault();
    let coin = document.querySelector('.coin')
    let msg = document.querySelector('.tosswinmsg')
    let flipbtn = document.getElementById('flipbtn')
    let tossDoneBtnContainer = document.querySelector('.tossDoneBtnContainer')

    let i = Math.floor(Math.random() * 2)
    coin.style.animation = "spin-heads 3s forwards";
    if(i)
    {
        setTimeout(()=>{
            coin.style.animation = "spin-heads 3s forwards";
        },100);
        setplayer1TossWinFlag(true);
        setTurn('X');
        setTimeout(()=>{
          msg.innerText = player1 + " Won the Toss";
          msg.style.height = '16px';
        },2000)
    }
    else
    {
        setTimeout(()=>{
            coin.style.animation = "spin-tails 3s forwards";
            
        },100);
        setplayer1TossWinFlag(false);
        setTurn('0')
        setTimeout(()=>{
          msg.innerText = player2 + " Won the Toss";
          msg.style.height = '16px';
        },2000)
    }
    setTimeout(()=>{
      flipbtn.style.display = 'none';
      tossDoneBtnContainer.style.display = 'block';
    },2000)

  }

  function updateTossDone(e){
    /* Function : To update the Toss status */
    e.preventDefault();
    setTossDone(true)
  }


  function updateGameSoundOnClick(){
    /* Function : To Play and Pause the Game Sound on soundBtn click */
    gameSound = gameSound === false ? true : false;

    let suondBtn = document.getElementById('soundbtn')
    if(winFlag === false && gameOverFlag === false)
    {
      if(gameSound === true)
      {
        bgmusic.play();
        suondBtn.src = process.env.PUBLIC_URL+"/images/sound.png"
      }
      else
      {
        bgmusic.pause();
        suondBtn.src = process.env.PUBLIC_URL+"/images/nosound.png"
      }
    }
  }

  const changeTurn = ()=>{
    // Function to change the turn
    if(winFlag === false){
        turn === "X"? setTurn('0') : setTurn('X');
    }
  }
  var winAtLastFlag =false;
  const checkGameOver= ()=>{
    // Function to check Game Over - When no one won
    const resetbtn = document.querySelector('#resetbtn')
    const boxtexts = document.querySelectorAll('.box')
    if(boxtexts[0].innerText !=='' && boxtexts[1].innerText !=='' && boxtexts[2].innerText !==''  && boxtexts[3].innerText !=='' && boxtexts[4].innerText !=='' && boxtexts[5].innerText !=='' && boxtexts[6].innerText !=='' && boxtexts[7].innerText !=='' && boxtexts[8].innerText !=='' && gameOverFlag === false)
    {
      if(winAtLastFlag === false )
      {
        document.querySelector('.winmsg').innerText = "No Winner this Time :)"
        document.getElementById('winimg').src = process.env.PUBLIC_URL + '/images/gameover.gif'
        document.getElementById('winimg').style.width = '14vw';
        bgmusic.pause();
        gameovermusic.play();
        resetbtn.innerText = "Play again!"
        setGameOverFlag(true);
      }
    }
}
const checkWin = (e)=>{
    /* Function to check winning condintion */ 
    const resetbtn = document.querySelector('#resetbtn')
    const boxtexts = document.querySelectorAll('.box');
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(element =>{
        if((boxtexts[element[0]].innerText === boxtexts[element[1]].innerText) && (boxtexts[element[1]].innerText === boxtexts[element[2]].innerText) && boxtexts[element[0]].innerText !== '' && winFlag === false && gameOverFlag === false)
        {
            setWinFlag(true);
            winAtLastFlag = true;
            document.getElementById('winimg').src = process.env.PUBLIC_URL + '/images/exited.gif'
            document.getElementById('winimg').style.width = '14vw';
            boxtexts[element[0]].style.backgroundColor = 'rgba(255,0,0,0.72)';
            boxtexts[element[1]].style.backgroundColor = 'rgba(255,0,0,0.72)';
            boxtexts[element[2]].style.backgroundColor = 'rgba(255,0,0,0.72)';
            bgmusic.pause();
            winmusic.play();
            resetbtn.innerText = "Play again!"
        }
    })
    return winFlag;
}

  function handleBoxClick(e)
  {
    /* Function to handle what happens on every click of box of gamebox */ 
    e.preventDefault(); 
    if(e.target.innerText === '' && winFlag === false && gameOverFlag === false)
    {
      clicktone.play();
      e.target.innerText = turn;
      changeTurn();
      let t = checkWin();
      if(t === false)
      {
        checkGameOver();
      }
        
    }
  }

  function gameReset()
  {
    /* Function to handle the Game reset button click */ 
    const boxtexts = document.querySelectorAll('.box');
    const winimg = document.querySelector('#winimg')
    const resetbtn = document.querySelector('#resetbtn')
    boxtexts.forEach(element =>{
      element.innerText = '';
      element.style.backgroundColor ='rgba(0,0,0,0';
      element.style.backgroundColor = 'none';
      setGameOverFlag(false);
      setWinFlag(false);
      if(player1TossWinFlag)
      {
        setTurn('X')
      }
      else
      {
        setTurn('0')
      }
    });
    winimg.style.width = '0';
    winAtLastFlag = false;
    resetbtn.innerText = "Game Reset!"
  }

  /*    *********** Conditional component rendering below *********** */

  if(!gotPlayersFlag  && !tossDone)
  {
    return (
      <>
      <Navbar display={'none'} homeDisplay ={'none'} marginRight = {'0'}/>
      <Players getPlayers = {getPlayers}/>
      <Footer/>
      </>
    );
  }
  else if(!tossDone){
    return (
      <>
        <Navbar display={'none'} homeDisplay ={'inline'} marginRight = {'0'}/>
        <Toss player1 = {player1} player2 = {player2} getTossResult ={getTossResult} updateTossDone = {updateTossDone}/>
        <Footer/>
      </>
    );
  }
  else{
    return (
      <>
        <Navbar display={'inline'} homeDisplay ={'inline'} marginRight = {'1.1rem'} updateGameSoundOnClick = {updateGameSoundOnClick}/>
        
        <Game player1 = {player1} player2 = {player2} turn={turn} player1TossWinFlag = {player1TossWinFlag} 
          updateGameSoundOnClick = {updateGameSoundOnClick} handleBoxClick = {handleBoxClick} gameReset ={gameReset} winFlag = {winFlag} gameOverFlag = {gameOverFlag}/>
        <Footer/>
      </>
    );
  }
}

export default App;
