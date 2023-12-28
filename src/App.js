import { useState } from 'react';
import { useEffect } from 'react';
import "./style/App.css"
import { Header } from './components/Header';
import { CreateTeams } from './components/CreateTeams';
import { ManagePlayers } from './components/ManagePlayers';
import { firestore } from './FirebaseConfig';
import { getDocs, collection} from "firebase/firestore";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    const getPlayers = async ()=>{
      const data = await getDocs(collection(firestore, "players"));
      setPlayers(data.docs.map((doc)=>({id: doc.id,...doc.data()})));
    }
    getPlayers();
  },[])

  return (
    <Router>
      <div className='container hideCursor'>
        <Header />
        <Routes>
          <Route exact path="/teams-manager/" element={<CreateTeams allPlayers = {players}/>}>
          </Route>
          <Route path="/teams-manager/manageplayers" element={<ManagePlayers allPlayers = {players}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
