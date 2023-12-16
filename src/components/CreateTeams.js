import { useState } from "react"
import React, { useEffect } from 'react';
import { GeneratedRes } from "./GeneratedRes";

export const CreateTeams = (props) => {
    const [playersCounter, setPlayersCounter] = useState(1)
    const [teams, setTeams] = useState(null);
    const [popupButton,setpopupButton] = useState(false)
    const players = props.allPlayers

    // useEffect(() => {
    //     if(e.target.checked)
    //         setPlayersCounter(playersCounter + 1); // This will always use latest value of count
    //     else
    //         setPlayersCounter(playersCounter + 1);
    // }, [playersCounter]);
    
    const changeCounter = (e)=>{
        console.log(playersCounter);
        // if(e.target.checked)
        // {
        //     if (playersCounter > 14){
        //         alert("Sorry you have reached the maximum, 14 players selected!")
        //         console.log(playersCounter);
        //         e.preventDefault();
        //     }
        //     else{
        //         setPlayersCounter((prevCounter) => prevCounter + 1);
        //         console.log(playersCounter);
        //     }
        // }
        // else{
        //     setPlayersCounter((prevCounter) => prevCounter - 1);
        //     console.log(playersCounter);
        // }
    };
    const createTeams = (playersList, teamSize, scoreDifference)=>{
        let numberOfTries = 0;
        let firstTeam,secondTeam,totalScoreFirstTeam,totalScoreSecondTeam;
        while (numberOfTries<5) {
            numberOfTries++;
            console.log(numberOfTries);
        
            firstTeam = getRandomSubset(playersList, teamSize);
            secondTeam = playersList.filter(player => !firstTeam.includes(player))
            totalScoreFirstTeam = firstTeam.reduce((sum, player) => sum + player.power, 0);
            totalScoreSecondTeam = secondTeam.reduce((sum, player) => sum + player.power, 0);
        
            if (Math.abs(totalScoreSecondTeam - totalScoreFirstTeam) <= scoreDifference) break;
        }
        
        const totalScoreFirstTeamRounded = totalScoreFirstTeam.toFixed(2);
        const totalScoreSecondTeamRounded = totalScoreSecondTeam.toFixed(2);
        
        shuffleArray(firstTeam);
        shuffleArray(secondTeam);
        
        console.log(`The first team's total score is ${totalScoreFirstTeam}`);
        console.log(`The second team's total score is ${totalScoreSecondTeam}`);
        
        setTeams({
            firstTeam,
            secondTeam,
            totalScoreFirstTeamRounded,
            totalScoreSecondTeamRounded,
            numberOfTries,
        });
        setpopupButton(true)
    };
    function getRandomSubset(array, size) {
        const shuffled = array.slice().sort(() => Math.random() - 0.5);
        return shuffled.slice(0, size);
    }
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
          
    

  return (
    <div>
        {players.map((player,index)=> {
            return(
                <div>
                    <label htmlFor={player.name}>{player.name}</label>
                    <label htmlFor={player.name}>{player.power}</label>
                    <input type="checkbox" id={player.name} onChange={changeCounter} key={index}/>
                </div>
            )
        })}
        <br/>
        <button onClick={()=>{createTeams(players,7,1)}}>شكل الفرق</button>
        {console.log(teams)}
        <GeneratedRes trigger={popupButton}>
            <h3>hello this is popup</h3>
        </GeneratedRes>
    </div>
  )
}
