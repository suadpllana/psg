// MatchesList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { matchesInfo } from './matchesInfo';
import './Matches.scss';

const Matches = () => {
  const [selectedCompetition, setSelectedCompetition] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');
  const [searchQuery, setSearchQuery] = useState('');

  const competitions = [
    'All',
    'Ligue 1',
    'UEFA Champions League',
    'FIFA Club World Cup',
    'Coupe de France',
    'Trophée des Champions'
  ];

  const filteredMatches = matchesInfo
    .filter(match => 
      selectedCompetition === 'All' || match.competition === selectedCompetition
    )
    .filter(match => {
      const opponent = match.homeTeam === 'PSG' ? match.awayTeam : match.homeTeam;
      return opponent.toLowerCase().includes(searchQuery.toLowerCase()) ||
             match.venue.toLowerCase().includes(searchQuery.toLowerCase());
    });

  const sortedMatches = [...filteredMatches].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return sortOrder === 'Oldest' ? dateA - dateB : dateB - dateA;
  });

  const getMatchStatus = (date, time) => {
    const matchDateTime = new Date(`${date} ${time}`);
    const now = new Date();
    
    if (now > matchDateTime) return 'finished';
    if (now.toDateString() === matchDateTime.toDateString()) return 'live';
    return 'upcoming';
  };

  return (
    <div className="matches-container">
      <h1 className="matches-title">
        PSG 2024-25 Matches 
      
      </h1>
      
      <div className="matches-filter">
        {competitions.map(comp => (
          <button
            key={comp}
            className={`filter-button ${selectedCompetition === comp ? 'active' : ''}`}
            onClick={() => setSelectedCompetition(comp)}
          >
            {comp}
          </button>
        ))}
      </div>
      
      <div className="matches-controls">
        <div className="matches-search">
          <input
            type="text"
            placeholder="Search by opponent or venue..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="matches-sort">
          <button
            className={`sort-button ${sortOrder === 'Newest' ? 'active' : ''}`}
            onClick={() => setSortOrder('Newest')}
          >
            Newest
          </button>
          <button
            className={`sort-button ${sortOrder === 'Oldest' ? 'active' : ''}`}
            onClick={() => setSortOrder('Oldest')}
          >
            Oldest
          </button>
        </div>
      </div>
      
      <div className="matches-grid">
        {sortedMatches.length > 0 ? (
          sortedMatches.map((match) => {
            const status = getMatchStatus(match.date, match.time);
            const isPSGHome = match.homeTeam === 'PSG';
            
            return (
              <Link
                to={`/psg/matches/${match.id}`}
                key={match.id}
                className="match-card"
              >
                <div className="match-header">
                  <div className="match-score">
                    
                    
                        <img src={match.homeTeamImage} alt={match.homeTeam} />
                        <span>{match.homeTeam} {match.score} {match.awayTeam}</span>
                        <img src={match.awayTeamImage} alt={match.awayTeam} />
                  
                 
                      
                     
                    
                    
                  </div>
                  <p className="match-competition">{match.competition}</p>
                  <span className={`match-status ${status}`}>
                    {status === 'finished' ? 'Match Finished' : 
                     status === 'live' ? 'Live Now' : 'Upcoming'}
                  </span>
                </div>
                
                <div className="match-details">
                  <div className="detail-row">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">
                      {new Date(match.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        year: 'numeric', 
                        month: 'short', 
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
              </Link>
            );
          })
        ) : (
          <div className="matches-empty">
            <div className="empty-icon">⚽</div>
            <p>No matches found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;