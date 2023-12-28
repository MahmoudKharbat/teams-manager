import { useState } from "react"
import { GeneratedRes } from "./GeneratedRes";
import "../style/CreateTeams.css"
import "../style/ManagePlayers.css"
import { Link } from "react-router-dom";

export const CreateTeams = (props) => {
    // const [playersCounter, setPlayersCounter] = useState(1)
    const [teams, setTeams] = useState([]);
    const [playingPlayers, setPlayingPlayers] = useState([]);
    const [popupButton,setpopupButton] = useState(false)
    const allPlayers = props.allPlayers
    const midpoint = Math.ceil(allPlayers.length / 2);
    const firstHalfPlayersList = allPlayers.slice(0, midpoint);
    const secondHalfPlayersList = allPlayers.slice(midpoint);
    const [teamsPowers,setTeamsPowers] = useState([])

    const selectionTracker = (e)=>{
        if (e.target.checked){
            setPlayingPlayers([...playingPlayers,allPlayers[e.target.id]])
        }
        else{
            const updatedList = playingPlayers.filter(player => player.id !== allPlayers[e.target.id].id);
            setPlayingPlayers(updatedList); // Update the state with the new list
        }
    };

    // const createTeams = (playersList, teamSize, scoreDifference)=>{
    //     let numberOfTries = 0;
    //     let firstTeam,secondTeam,totalScoreFirstTeam,totalScoreSecondTeam;
    //     let founded = false;
    //     let loops = 0;
    //     while (numberOfTries<10) {
    //         numberOfTries++;
    //         console.log(numberOfTries);
        
    //         firstTeam = getRandomSubset(playersList, teamSize);
    //         secondTeam = playersList.filter(player => !firstTeam.includes(player))
    //         firstTeam.map((player)=>(console.log(typeof(player.Strength))))
    //         totalScoreFirstTeam = firstTeam.reduce((sum, player) => sum + player.Strength, 0);
    //         totalScoreSecondTeam = secondTeam.reduce((sum, player) => sum + player.Strength, 0);
    //         console.log(totalScoreSecondTeam);
    //         console.log(totalScoreFirstTeam);
    //         console.log(Math.abs(totalScoreSecondTeam - totalScoreFirstTeam));
    //         console.log(`the current score difference: ${scoreDifference}`);

    //         if (Math.abs(totalScoreSecondTeam - totalScoreFirstTeam) <= scoreDifference)
    //         {
    //             founded = true;
    //         }
    //         if (founded) break;
    //         else if (numberOfTries === 10) {
    //             numberOfTries = 0;
    //             scoreDifference += 0.5;
    //             loops+=1;
    //         }
    //         if (loops === 5) break;
    //     }
        
    //     if (founded){
    //         const totalScoreFirstTeamRounded = totalScoreFirstTeam.toFixed(2);
    //         const totalScoreSecondTeamRounded = totalScoreSecondTeam.toFixed(2);
            
    //         shuffleArray(firstTeam);
    //         shuffleArray(secondTeam);
            
    //         console.log(`The first team's total score is ${totalScoreFirstTeam}`);
    //         console.log(`The second team's total score is ${totalScoreSecondTeam}`);
            
    //         setTeams({
    //             firstTeam,
    //             secondTeam,
    //             totalScoreFirstTeamRounded,
    //             totalScoreSecondTeamRounded,
    //             numberOfTries,
    //         });
    //         setpopupButton(true)
    //     }
    //     else{
    //         alert("The teams creations failed, please try again!")
    //     }
    // };
    // function getRandomSubset(array, size) {
    //     const shuffled = array.slice().sort(() => Math.random() - 0.5);
    //     return shuffled.slice(0, size);
    // }
    
    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    function dividePlayers(players) {
        // Sort players by strength in descending order
        players.sort((a, b) => b.Strength - a.Strength);
    
        let team1 = [];
        let team2 = [];
    
        players.forEach((player, index) => {
            if (index % 2 === 0) {
                team1.push(player);
            } else {
                team2.push(player);
            }
        });
    
        return [team1, team2];
    }
    
    function assignTeamNumbers(teams) {
        teams.forEach((team, index) => {
            team.forEach(player => {
                player.PlayerNumber = index + 1;
            });
        });
    }
    
    const createTeams = (playersList, teamSize, scoreDifference)=>{
        // Divide players into two teams
        const [teamA, teamB] = dividePlayers(playersList);
        
        // Shuffle each team
        shuffleArray(teamA);
        shuffleArray(teamB);

        // Assign team numbers
        assignTeamNumbers([teamA, teamB]);
        let totalA = 0;
        let totalB = 0;
        teamA.forEach((player, index) => {
            totalA += player.Strength
            });
        teamB.forEach((player, index) => {
            totalB += player.Strength
            });
        totalA = totalA.toFixed(1);
        totalB = totalB.toFixed(1);
        setTeams([teamA,teamB])
        setTeamsPowers([totalA,totalB])
        setpopupButton(true)
    }
    
  return (
    <div>
        <div className="checkboxContainer">
            <div className="checkboxLeftContainer">
                {firstHalfPlayersList.map((player,index)=> {
                    return(
                        <div className="innerItem">
                            <label className="playersNames" htmlFor={player.FirstName}>{player.FirstName} {player.LastName}</label>
                            <input type="checkbox" id={index} onChange={selectionTracker} key={index} value={JSON.stringify(player)}/>
                        </div>
                    )          
                })}
            </div>
            <div className="checkboxRightContainer">
                {secondHalfPlayersList.map((player,index)=> {
                    return(   
                        <div className="innerItem">
                            <label className="playersNames" htmlFor={player.FirstName}>{player.FirstName} {player.LastName}</label>
                            <input type="checkbox" id={index+midpoint} onChange={selectionTracker} key={index+midpoint} value={JSON.stringify(player)}/>
                        </div>
                    )          
                })}
            </div>
        </div>
        <br/>
        <button className = 'button-36' onClick={()=>{createTeams(playingPlayers,7,1)}}>شكل الفرق</button>
        <Link className = 'button-36 linkButton' to="/teams-manager/manageplayers">أضف لاعب</Link>
        <GeneratedRes trigger={popupButton} setTrigger={setpopupButton} teams={teams} powers={teamsPowers}></GeneratedRes>
    </div>
  )
}
