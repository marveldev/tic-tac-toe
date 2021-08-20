import './ticTacToe.scss'

const TicTacToe = () => {
  return (
    <div className={"tic-tac-toe"}>
      <h1 className={"title"}>Tic Tac Toe</h1>
      <div>
        <div className={"header"}>
          <div>
            <p>Player 1</p>
            <p>x</p>
            <div className={"active-player-bar"}/>
          </div>
          <div>
            <span>1</span>
            <span> : </span>
            <span>0</span>
          </div>
          <div>
            <p>Player 2</p>
            <p>O</p>
          </div>
        </div>
        <div className={"content"}>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>o</div>
          <div>o</div>
          <div>o</div>
          <div>o</div>
          <div>o</div>
        </div>
      </div>
    </div>
  )
}

export default TicTacToe
