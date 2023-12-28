import React, { useState } from 'react'
import "../style/ManagePlayers.css"
import { Link } from "react-router-dom";
import { addDoc, collection, updateDoc, deleteDoc, doc} from "firebase/firestore";
import { firestore } from '../FirebaseConfig';
import "./delete.png"
export const ManagePlayers = (props) => {
  const [firstName,setfirstName] = useState("")
  const [lastName,setlastName] = useState("")
  const [strength,setStrength] = useState(0)
  const [modifiedStrength,setModifiedStrength] = useState(0)
  const players = props.allPlayers
  
  const createPlayer = async () =>{
    if (firstName.trim().length == 0 || lastName.trim().length==0){
      alert("Please fill in players information first!");
      return;
    }
    let strengthConvertedType = parseFloat(strength)
    await addDoc(collection(firestore, "players"),{FirstName:firstName,LastName:lastName,Strength:strengthConvertedType});
    alert("Player registered successfully!")
  }

  const deletePlayer = async (e) =>{
    await deleteDoc(doc(firestore, 'players', e.currentTarget.id));
    alert("Player deleted successfully!")
  }

  const handleStrengthChange = async (e)=>{
    let strengthConvertedType = parseFloat(e.target.value)
    for (const player of players) 
      if(e.target.id == player["id"]){
        const playerDocRef = doc(firestore, 'players', player.id);
        await updateDoc(playerDocRef, {
          ["Strength"]: strengthConvertedType,
        });
        break
      }
    
  }

  return (
    <div className=''>
      <div className='playersContainer'>
        {players.map((player,index)=> {
          return(
              <div className="innerItem">
                  <input type='text' defaultValue={player.Strength} className='strengthValue' id={player.id} onChange={handleStrengthChange}/>
                  <label className="playersNames" htmlFor={player.FirstName}>{player.FirstName} {player.LastName}</label>
                  <button className='deleteButton' onClick={deletePlayer} id={player.id}>
                    <img className="imageSize" src={require("./delete.png")} alt="Delete Button"/>
                  </button>
              </div>
          )          
        })}
      </div>
      <div className='inputsContainer'>
        <input className = 'inputField name' type="text" placeholder="الأسم" onChange={(e)=>{setfirstName(e.target.value)}}/>
        <input className = 'inputField family' type="text" placeholder="العائلة" onChange={(e)=>{setlastName(e.target.value)}}/>
        <input className = 'inputField strength' type="text" placeholder="القوة" onChange={(e)=>{setStrength(e.target.value)}}/>
        <button className = 'button-36' onClick={createPlayer}>أضف اللاعب</button>
      </div>
      <Link className = 'button-36 linkButton' to="/teams-manager/">شكل الفرق</Link>
    </div>
  )
}
