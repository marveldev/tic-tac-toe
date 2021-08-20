import './ticTacToe.scss'
import { useState } from 'react'

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  
  const doStuff = index => {
    if (!squares[index]) {
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
            <span>1</span>
            <span> : </span>
            <span>0</span>
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
            <div key={index} onClick={() => doStuff(index)}>{square}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TicTacToe
