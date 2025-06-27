// MatchDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { matchesInfo } from './matchesInfo';
import './Matches.scss';
import { useNavigate } from 'react-router-dom';

const Match = () => {
  const { id } = useParams();
  const match = matchesInfo.find((m) => m.id === parseInt(id));
  const navigate = useNavigate()
  if (!match) {
    return (
      <div className="matches-container">
        <div className="matches-empty">
          <div className="empty-icon">❌</div>
          <p>Match not found</p>
        </div>
      </div>
    );
  }

  const isPSGHome = match.homeTeam === 'PSG';
  const status = new Date(`${match.date} ${match.time}`) > new Date() ? 'upcoming' : 'finished';

  return (
    <div className="matches-container match-page">
      <p onClick={() => navigate(-1)} className="go-back">Go back</p>
      <div className="match-card">
        <div className="match-header">
          <div className="match-score">
       
           
                <img src={match.homeTeamImage} alt={match.homeTeam} />
                <span>{match.homeTeam} {match.score} {match.awayTeam}</span>
                <img src={match.awayTeamImage} alt={match.awayTeam} />
            
        
          
              
         
          </div>
          <p className="match-competition">{match.competition}</p>
          <span className={`match-status ${status}`}>
            {status === 'finished' ? 'Match Finished' : 'Upcoming'}
          </span>
        </div>
        
        <div className="match-details">
          <div className="detail-row">
            <span className="detail-label">Date:</span>
            <span className="detail-value">
              {new Date(match.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Time:</span>
            <span className="detail-value">{match.time}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Venue:</span>
            <span className="detail-value">{match.venue}</span>
          </div>
        </div>
      </div>
      
      <div className="match-sections">
        {status === 'finished' && (
          <div className="match-section">
            <h2>Match Goals</h2>
            {match.goals.length > 0 ? (
              <ul className="goals-list">
                {match.goals.map((goal, index) => (
                  <li key={index}>
                    <div className="goal-info">
                      <span className="goal-minute">{goal.minute}'</span>
                      <span>
                        {goal.player} ({goal.team})
                        {goal.type && <span className="goal-type">{goal.type}</span>}
                      </span>
                    </div>
                    {goal.score && <span>{goal.score}</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No goals scored in this match</p>
            )}
          </div>
        )}
        
        <div className="match-section">
          <h2>Lineups</h2>
          <div className="lineup-grid">
            <div className="lineup-team">
              <h3>
                <img src={match.homeTeamImage} alt={match.homeTeam} />
                {match.homeTeam}
              </h3>
              {match.lineup !== null &&  
              <ul>
                {match.lineup[match.homeTeam.replace(/ /g, '_')]?.map((player, index) => (
                  <li key={index}>{player}</li>
                )) || <li>No lineup available</li>}
              </ul>}
            </div>
            
            <div className="lineup-team">
              <h3>
                <img src={match.awayTeamImage} alt={match.awayTeam} />
                {match.awayTeam}
              </h3>
         {match.lineup !== null &&     <ul>
                
                {match?.lineup[match.awayTeam.replace(/ /g, '_')]?.map((player, index) => (
                  <li key={index}>{player}</li>
                )) || <li>No lineup available</li>}
              </ul>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;