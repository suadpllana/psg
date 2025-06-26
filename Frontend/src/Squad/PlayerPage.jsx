import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { squadPlayers } from './squad';
import './Squad.scss';

const PlayerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const player = squadPlayers.find(player => player.id === parseInt(id));

  if (!player) {
    return <div className="squad">Player not found</div>;
  }

  return (
    <div className="player-page">
      <button className="back-button" onClick={() => navigate('/psg/squad')}>
        Back to Squad
      </button>
      


      <div className="player-content">
        <div className="player-image">
          <img src={player?.image} alt={player?.name} />
          <div className="player-number">#{player?.number}</div>
        </div>

        <div className="player-info">
          <div className="info-table">
            <div className="info-row">
              <span className="info-label">Full name</span>
              <span className="info-value">{player?.name}</span>
            </div>
          <div className="info-row">
              <span className="info-label">Position</span>
              <span className="info-value">{player?.position}</span>
            </div>
            
              <div className="info-row">
               
               <span className="info-label">Stats</span>
                {player?.position === "Goalkeeper" ? 
                <>
               <span className="info-value">Appearances: {player?.stats.appearances}</span>  
               <span className="info-value">Minutes Played: {player?.stats.minutesPlayed}</span>  
               <span className="info-value">Clean Sheets: {player?.stats.cleanSheets}</span>  
               <span className="info-value">Saves: {player?.stats.saves}</span>  
                
                </>
               :
              <>
               <span className="info-value">Appearances: {player?.stats.appearances}</span>  
               <span className="info-value">Minutes Played: {player?.stats.minutesPlayed}</span>  
               <span className="info-value">Goals: {player?.stats.goals}</span>  

               <span className="info-value">Assists: {player?.stats.assists}</span>  
              </>
             
                } <br/>
             
            </div>
         
          
            <div className="info-row">
              <span className="info-label">Nationality</span>
              <span className="info-value">{player?.nationality}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Squad number</span>
              <span className="info-value">{player?.number}</span>
            </div>
          </div>

          <div className="player-bio">
            <h3>BIOGRAPHY</h3>
            <p>{player?.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;