import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import Nav from './Nav';
import Squad from './Squad/Squad.jsx';
import PlayerPage from './Squad/PlayerPage';
import Matches from './Matches/Matches.jsx';
import Match from './Matches/Match';
import News from './News/News';
import Item from './News/Item';
import Stats from './Stats/Stats.jsx';
import About from './About/About';
import Fun from './Fun/Fun';
import AdminLogin from './News/AdminLogin';
import AdminNews from './News/AdminNews';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/psg/admin/login" />;
};

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psg/home" element={<Home />} />
        <Route path="/psg/squad" element={<Squad />} />
        <Route path="/psg/squad/:id" element={<PlayerPage />} />
        <Route path="/psg/matches" element={<Matches />} />
        <Route path="/psg/matches/:id" element={<Match />} />
        <Route path="/psg/news" element={<News />} />
        <Route path="/psg/news/:id" element={<Item />} />
        <Route path="/psg/stats" element={<Stats />} />
        <Route path="/psg/about" element={<About />} />
        <Route path="/psg/fun" element={<Fun />} />
        <Route path="/psg/admin/login" element={<AdminLogin />} />
        <Route
          path="/psg/admin"
          element={
            <ProtectedRoute>
              <AdminNews />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;