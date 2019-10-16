import React from 'react'

const NameComponent = (props) => {
    
      return(
        <div>
          <h4>Player Page</h4>
          <input id="player1name" placeholder="Player 1"/>
          <input id="player2name" placeholder="Player 2"/>
          <button onClick={props.onAddNames}>Add Players</button>
          </div>
      )
    }

export default NameComponent
