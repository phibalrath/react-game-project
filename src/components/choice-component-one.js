import React from 'react'
import {Link} from 'react-router-dom'

const ChoiceComponentOne = (props) => {

  return <div>
        <div className="titlestrip">{props.player2Name}, Pick Your Weapon</div>
             <div className="card-deck">
              <div className="col-sm-1"></div>
              <div className="col-lg-3">
              <div className="card border-info mb-3">
                <h3 class="cardheaderred">Sword</h3>
                <div className="card-body">
                  <img className="card-img-top" src="https://image.flaticon.com/icons/svg/744/744729.svg" padding="30px"></img>
                  <button type="button" className="btn btn btn-dark" onClick={props.chooseSword}>Use Sword</button>
                </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div className="card border-info mb-3">
                <h3 class="cardheaderblue">Shield</h3>
                <div className="card-body">
                  <img className="card-img-top" src="https://image.flaticon.com/icons/svg/1065/1065535.svg"></img>
                  <button type="button" className="btn btn btn-dark" onClick={props.chooseShield}>Use Shield</button>
              </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div class="card border-info mb-3">
              <h3 class="cardheaderyellow">Staff</h3>
              <div class="card-body">
                <img className="card-img-top" src="https://image.flaticon.com/icons/svg/1067/1067730.svg"></img>
                <button type="button" className="btn btn btn-dark" onClick={props.chooseStaff}>Use Staff</button>
              </div>
              </div>
              </div>
              </div>
              <h4>{props.player2Name} picked <strong>{props.weaponChoice}</strong></h4>
              <br />
              <Link to="/Winner" onClick={props.chooseWinner} type="button" className="btn btn btn-dark">Next</Link>

            </div>

}

export default ChoiceComponentOne
