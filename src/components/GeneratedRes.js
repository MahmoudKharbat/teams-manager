import React from 'react'
import "../style/GeneratedRes.css"

export const GeneratedRes = (props) => {
  const teamA = props.teams[0]
  const teamATotalStrength = props.powers[0]
  const teamB = props.teams[1]
  const teamBTotalStrength = props.powers[1]
  return (props.trigger) ? (
    <div className='popupBackground'>
        <div className='popup-inner'>
          <button className='closingButton' onClick={()=>{props.setTrigger(false)}}>X</button>
          <span className='resultsTitle'>قسمة الفرق</span>
          <div className='teamA'>
            <span>الفريق الأول</span>
            {teamA.map((player,index)=>(
              <span className='item'>{index+1} - {player.FirstName} {player.LastName}</span>
            ))}
            <span className='item'>مجموع قوى اللاعبين {teamATotalStrength}</span>
          </div>
          <div className='teamB'>
            <span>الفريق الثاني</span>
            {teamB.map((player,index)=>(
              <span className='item'>{index+1} - {player.FirstName} {player.LastName}</span>
            ))}
            <span className='item'>مجموع قوى اللاعبين {teamBTotalStrength}</span>
          </div>
        </div>
    </div>
  ) : "";
}
