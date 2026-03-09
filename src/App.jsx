import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PlayersList from './pages/PlayersList';
import PlayerDetails from './pages/PlayerDetails';
import ComparePlayers from './pages/ComparePlayers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<PlayersList />} />
            <Route path="/player/:id" element={<PlayerDetails />} />
            <Route path="/compare" element={<ComparePlayers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
