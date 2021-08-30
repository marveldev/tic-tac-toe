import { useEffect, useState } from 'react'
import { patterns } from './patterns'
import './ticTacToe.scss'

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  const [gameIsOver, setGameIsOver] = useState(false)
  const [score, setScore] = useState({playerX: 0, playerO: 0})
  
  const checkWinner = () => {
    for (let index = 0; index < patterns.length; index++) {
      const [a, b, c] = patterns[index]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    
    return null
  }
  
  const winner = checkWinner()
  
  const checkIfTie = () => {
    for (let index = 0; index < squares.length; index++) {
      if (squares[index] === "") {
        return false
      }
    }
    
    if (!winner) return true
    return null
  }
  
  const gameIsTie = checkIfTie()
  
  const restartGame = () => {
    setGameIsOver(false)
    setCurrentPlayer('x')
    setSquares(["", "", "", "", "", "", "", "", ""])
  }
  
  useEffect(() => {
    winner && setGameIsOver(true)
    gameIsTie && setGameIsOver(true)
  },[gameIsTie, winner])
  
  const addSquareValue = (square, index) => {
    if (square === "") {
      const mutableData = [...squares]
      mutableData[index] = currentPlayer
      setSquares(mutableData)
      currentPlayer === 'x' ? setCurrentPlayer('O') : setCurrentPlayer('x')
    }
  }
  
  return (
    <div className={"tic-tac-toe"}>
      <h1 className={"title"}>Tic Tac Toe</h1>
      <div>
        <div className={"header"}>
          <div>
            <p>Player 1</p>
            <p>x</p>
            {currentPlayer === 'x' &&
              <div className={"active-player-bar"}/>
            }
          </div>
          <div>
            <span>{0}</span>
            <span> : </span>
            <span>{0}</span>
          </div>
          <div>
            <p>Player 2</p>
            <p>O</p>
            {currentPlayer === 'O' &&
              <div className={"active-player-bar"}/>
            }
          </div>
        </div>
        <div className={"content"}>
          {squares?.map((square, index) =>
            <div key={index} onClick={() => addSquareValue(square, index)}>{square}</div>
          )}
        </div>
      </div>
      {gameIsOver &&
        <div>
          <div className={"overlay"}/>
          <div className={"modal"}>
            <p>{winner ? `${winner} wins` : `IT'S A TIE`}</p>
            <button onClick={restartGame}>Continue</button>
          </div>
        </div>
      }
    </div>
  )
}

export default TicTacToe
