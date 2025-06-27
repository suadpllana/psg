import React, { useState } from 'react';
import { squadPlayers } from './squad';
import { useNavigate } from 'react-router-dom';
import './Squad.scss';

const Squad = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const positions = ['All', 'Goalkeepers', 'Defenders', 'Midfielders', 'Forwards'];

  const filteredPlayers = filter === 'All'
    ? squadPlayers
    : squadPlayers.filter(player => player.position === filter);

  const handlePlayerClick = (id) => {
    navigate(`/psg/squad/${id}`);
  };

  return (
    <div className="squad">
      <h1 style={{color: "black", marginTop: "2rem"}}>PSG Squad 2024-25</h1>
      <div className="filter-buttons">
        {positions.map(position => (
          <button
            key={position}
            className={`filter-button ${filter === position ? 'active' : ''}`}
            onClick={() => setFilter(position)}
          >
            {position}
          </button>
        ))}
      </div>
      <div className="player-grid">
        {filteredPlayers.map(player => (
          <div
            key={player.id}
            className="player-card"
            onClick={() => handlePlayerClick(player.id)}
          >
            {player.image && <img src={player.image} />}
            <h3>{player.name}</h3>
            <p style={{color: "black"}}>#{player.number}</p>
            <p style={{color: "black"}} >{player.position.slice(0, -1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Squad;