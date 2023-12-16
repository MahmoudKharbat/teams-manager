import React, { useState } from 'react';
import "./style/App.css"
import { Header } from './components/Header';
import { CreateTeams } from './components/CreateTeams';
import { ManagePlayers } from './components/ManagePlayers';

const App = () => {
  const [allPlayers, modifyPlayer] = useState(
    [
      {'name': 'محمود خربط', 'power': 5.5},
      {'name': 'عمر بدران', 'power': 7},
      {'name': 'عدي بدران', 'power': 7},
      {'name': 'عامر بدران', 'power': 7.5},
      {'name': 'مجدي دقة', 'power': 6.5},
      {'name': 'محمد عادل', 'power': 5.5},
      {'name': 'محمد فيصل', 'power': 7},
      {'name': 'محمد وتد', 'power': 6.5},
      {'name': 'ايهاب غانم', 'power': 6.5},
      {'name': 'نور غانم', 'power': 6},
      {'name': 'مسلم', 'power': 6},
      {'name': 'وسيم', 'power': 7},
      {'name': 'ايمن سورة', 'power': 6},
      {'name': 'sd سورة', 'power': 6},
      {'name': 'sd سsdورة', 'power': 6},
      {'name': 'منير ناصر', 'power': 6}
    ]
  )

  const handleVariableChange = (newValue) => {
    modifyPlayer(newValue);
  };

  return (
    <div className='container'>
      <Header />
      <CreateTeams allPlayers = {allPlayers}/>
      <ManagePlayers allPlayers = {allPlayers}/>
    </div>
  );
};

export default App;
