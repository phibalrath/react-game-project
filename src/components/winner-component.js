import React from 'react'
import {Link} from 'react-router-dom'

const WinnerComponent = (props) => {

return <div>
          <div className="titlestrip">Sword X Shield X Staff</div>
          <br />
          <div class="alert alert-secondary" role="alert">
               {props.player1Name} played {props.weaponChoice}
          </div>
          <div class="alert alert-secondary" role="alert">
            {props.player2Name} played {props.weaponChoice2}
          </div>
          <h1>The winner is {props.winner}</h1>

          <Link to="/" type="button" className="btn btn btn-dark">Play Again</Link>

        </div>
       
}

export default WinnerComponent;