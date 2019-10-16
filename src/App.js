import React from 'react';
import './App.css';
import NameComponent from './components/name-component'
import ChoiceComponent from './components/choice-component';
import {BrowserRouter, Route} from 'react-router-dom'
import ChoiceComponentOne from './components/choice-component-one';
import WinnerComponent from './components/winner-component'



function App() {

  let [player1Name, setPlayer1Name] = React.useState("")
  let [player2Name, setPlayer2Name] = React.useState("")
  let [weaponChoice, setWeaponChoice] = React.useState([])
  let [weaponChoice2, setWeaponChoice2] = React.useState([])
  let [winner, setWinner] = React.useState("")

  const onAddNames = () => {
      setPlayer1Name(document.getElementById("player1name").value)
      setPlayer2Name(document.getElementById("player2name").value)
    }

    const chooseSword = () => {
      setWeaponChoice("sword")
    }

    const chooseShield = () => {
      setWeaponChoice("shield")
    }

    const chooseStaff = () => {
      setWeaponChoice("staff")
    }

    const chooseSword2 = () => {
      setWeaponChoice2("sword")
    }

    const chooseShield2 = () => {
      setWeaponChoice2("shield")
    }

    const chooseStaff2 = () => {
      setWeaponChoice2("staff")
    }

    const chooseWinner = () => {
        if (weaponChoice === "sword" && weaponChoice2 === "staff"){
          setWinner(player1Name)
        } if (weaponChoice === "sword" && weaponChoice2 === "shield"){
          setWinner(player2Name)
        } if (weaponChoice === "sword" && weaponChoice2 === "sword"){
          setWinner("no one. You tied!")
        } if (weaponChoice === "staff" && weaponChoice2 === "shield"){
          setWinner(player1Name)
        } if (weaponChoice === "staff" && weaponChoice2 === "sword"){
          setWinner(player2Name)
        } if (weaponChoice === "staff" && weaponChoice2 === "staff"){
          setWinner("no one. You tied!")
        } if (weaponChoice === "shield" && weaponChoice2 === "sword"){
          setWinner(player1Name)
        } if (weaponChoice === "shield" && weaponChoice2 === "staff"){
          setWinner(player2Name)
        } if (weaponChoice === "shield" && weaponChoice2 === "shield"){
          setWinner("no one. You tied!")
        }
      }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact render={(props) => <NameComponent player1Name={player1Name} player2Name={player2Name} onAddNames={onAddNames} {...props} />} />
          <Route path="/Player1" render={(props) => <ChoiceComponent player1Name={player1Name} chooseSword={chooseSword} chooseShield={chooseShield} chooseStaff={chooseStaff} weaponChoice={weaponChoice} {...props} /> }/>
          <Route path="/Player2" render={(props) => <ChoiceComponentOne player2Name={player2Name} chooseSword={chooseSword2} chooseShield={chooseShield2} chooseStaff={chooseStaff2} weaponChoice={weaponChoice2} chooseWinner={chooseWinner} {...props} /> } />
          <Route path="/Winner" render={(props) => <WinnerComponent chooseWinner={chooseWinner} winner={winner} player1Name={player1Name} player2Name={player2Name} weaponChoice={weaponChoice} weaponChoice2={weaponChoice2} {...props} />} />
        </div>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
