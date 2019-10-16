import React from 'react'

const WinnerComponent = (props) => {

return <div>
          <button onClick={props.chooseWinner}>WHO WON????</button>
          <br />
          <br />
          <h1>The winner is: {props.winner}</h1>
        </div>
       
}

export default WinnerComponent;