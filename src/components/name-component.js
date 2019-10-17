import React from 'react'
import {Link} from 'react-router-dom'


const NameComponent = (props) => {
      return(
        <div className="backgroundPicture container-fluid">
          <div className="titlestrip">
              Sword X Shield X Staff
              <h5>A Rock-Paper-Scissor Game</h5>
          </div>
          <br />
          <h4>Choose Player Name</h4>
          <br />
          <input id="player1name" placeholder="Player 1" onChange={props.onAddNames} />
          <div className="space" />
          <input id="player2name" placeholder="Player 2" onChange={props.onAddNames}/>
          <br />
          <br />
          <Link to="/Player1" type="button" className="btn btn btn-dark">Next</Link>
          <br />
          <br />
          <div type="button" class="btn btn-dark" data-placement="bottom" title="
            Sword beats Staff ||
            Staff beats Shield ||
            Shield beats Sword" >Rules
          </div>
          </div>

      )
    }

export default NameComponent
