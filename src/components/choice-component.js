import React from 'react'

const ChoiceComponent = (props) => {
 
 return <div>
              <h2>{props.player1Name} Pick Your Weapon</h2>
              <br />Sword:<br />
              <img src="https://image.flaticon.com/icons/svg/744/744729.svg" height="50px" /><br />
              <button onClick={props.chooseSword}>Use Sword</button>
              <br />
              <br />Shield:<br />
              <img src="https://image.flaticon.com/icons/svg/1065/1065535.svg" height="50px"/><br />
              <button onClick={props.chooseShield}>Use Shield</button>
              <br />
              <br />Staff:<br />
              <img src="https://image.flaticon.com/icons/svg/1067/1067730.svg" height="50px"/><br />
              <button onClick={props.chooseStaff}>Use Staff</button>
              <br />
              <br />
              <h4>{props.player1Name} picked {props.weaponChoice}</h4>
            </div>
}

export default ChoiceComponent