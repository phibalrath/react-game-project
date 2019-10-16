import React from 'react'
import {Link} from 'react-router-dom'


const NameComponent = (props) => {
      return(
        <div>
          <h4>Player Page</h4>
          <input id="player1name" placeholder="Player 1" onChange={props.onAddNames} />
          <input id="player2name" placeholder="Player 2" onChange={props.onAddNames}/>
          
          <br />
          <Link to="/Player1">Next</Link>
          </div>
      )
    }

export default NameComponent
