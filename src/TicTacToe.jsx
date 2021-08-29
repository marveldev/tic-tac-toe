import { useEffect, useState } from 'react'
import { patterns } from './patterns'
import './ticTacToe.scss'

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  const [noOfWIns, setNoOfWins] = useState({playerX: 0, playerO: 0})
  
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
    let squareIsFilled = true
    for (let index = 0; index < squares.length; index++) {
      if (squares[index] === "") squareIsFilled = false
    }
  
    if (squareIsFilled && !winner) {
        console.log('GAME IS TIE')
    }
  }
  
  useEffect(() => {
    console.log(winner)
    checkIfTie()
  },[checkIfTie, winner])
  
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
            <span>{noOfWIns.playerX}</span>
            <span> : </span>
            <span>{noOfWIns.playerO}</span>
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
    </div>
  )
}

export default TicTacToe
