import React, { useState } from 'react';
import { topScorersAndAssisters } from './stats';
import { legendsInfo } from './stats';
import { standingsPerCompetition } from './stats';
import './Stats.scss';

const Stats = () => {
  const [selectedCompetition, setSelectedCompetition] = useState('Ligue 1');
  const [selectedSeason, setSelectedSeason] = useState("2024-25");

  const getStandings = () => {
    const competition = standingsPerCompetition.find(
      (comp) => comp.competition === selectedCompetition
    );
    if (!competition) return [];

    if (selectedCompetition === 'FIFA Club World Cup') {
      const grouped = competition.teams.reduce((acc, team) => {
        if (!acc[team.group]) acc[team.group] = [];
        acc[team.group].push(team);
        return acc;
      }, {});
      return Object.keys(grouped)
        .sort()
        .map((group) => ({ group, teams: grouped[group] }));
    }
    return [{ group: null, teams: competition.teams }];
  };

  const standings = getStandings();

  return (
    <div className="stats-container">
      <h1 className="stats-title">PSG 2024-25 Statistics</h1>
<section className="stats-section">
  <h2 className="section-title">Top Scorers & Assisters</h2>
  
  <div className="season-selector">
    <select 
      value={selectedSeason} 
      onChange={(e) => setSelectedSeason(e.target.value)}
    >
      <option value="2022-23">2022-23 Season</option>
      <option value="2023-24">2023-24 Season</option>
      <option value="2024-25">2024-25 Season</option>
    </select>
  </div>

  <div className="stats-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Nationality</th>
          <th>Position</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Matches Played</th>
        </tr>
      </thead>
      <tbody>
        {topScorersAndAssisters
          .find(season => season.season === selectedSeason)
          ?.players
          .map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td> 
              <td>
                <span className={`flag-icon flag-icon-${player.nationality.toLowerCase()}`}></span>
                {player.nationality}
              </td>
              <td>{player.position}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>{player.matchesPlayed}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</section>

      

      <section className="stats-section">
        <h2 className="section-title">Standings per Competition</h2>
        <div className="standings-filter">
          <button
            className={`filter-button ${selectedCompetition === 'Ligue 1' ? 'active' : ''}`}
            onClick={() => setSelectedCompetition('Ligue 1')}
          >
            Ligue 1
          </button>
          <button
            className={`filter-button ${selectedCompetition === 'UEFA Champions League' ? 'active' : ''}`}
            onClick={() => setSelectedCompetition('UEFA Champions League')}
          >
            UCL
          </button>
          <button
            className={`filter-button ${selectedCompetition === 'FIFA Club World Cup' ? 'active' : ''}`}
            onClick={() => setSelectedCompetition('FIFA Club World Cup')}
          >
            FIFA CWC
          </button>
        </div>

        {standings.map(({ group, teams }) => (
          <div key={group || selectedCompetition} className="stats-table">
            {group && <h3 className="group-title">Group {group} Standings</h3>}
            <table className="group-table">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Team</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr key={index}>
                    <td className="center-text">{team.position}</td>
                    <td> <img style={{width: "25px"}} src={team.image} alt="" /> {team.name}</td>
                    <td className="center-text">{team.matchesPlayed}</td>
                    <td className="center-text">{team.wins}</td>
                    <td className="center-text">{team.draws}</td>
                    <td className="center-text">{team.losses}</td>
                    <td className="center-text">{team.goalsScored}</td>
                    <td className="center-text">{team.goalsConceded}</td>
                    <td className="center-text">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      <section className="stats-section">
        <h2 className="section-title">PSG Legends</h2>
        <div className="legends-grid">
          {legendsInfo.map((legend) => (
            <div key={legend.id} className="legend-card">
              <div className="legend-header">
                <h3 className="legend-name">{legend.name}</h3>
                <p className="legend-role">{legend.role} ({legend.yearsActive})</p>
              </div>
              <div className="legend-details">
                <p><strong>Nationality:</strong> {legend.nationality}</p>
                <p><strong>Achievements:</strong></p>
                <ul>
                  {legend.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stats;