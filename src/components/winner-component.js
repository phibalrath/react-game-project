import React from 'react'

const WinnerComponent = (props) => {

return <div>
          <button onClick={props.chooseWinner}>Compete</button>
          <br />
          <br />
          The winner is {props.winner}
        </div>
}

export default WinnerComponent;