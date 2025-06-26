import React, { useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import './ClubWorldCupPredictor.css';
import { initialGroups } from './cwcTeams';
import {Link } from "react-router-dom"
const Match = ({ match, teams, onSelectWinner, matchWinners, isFinal = false }) => {
  const [team1, team2] = teams; 
  const roundId = match.round;
  const winner = matchWinners[roundId]?.[match.id];

  return (
    <div className={`match ${isFinal ? 'final-match' : ''}`}>
      <span
        className={`team ${winner === team1.name ? 'selected-team' : winner && winner !== team1.name ? 'loser-team' : ''} ${
          isFinal ? 'final-team' : ''
        }`}
        onClick={() => team1.name !== 'TBD' && team2.name !== 'TBD' && onSelectWinner(roundId, match.id, team1.name)}
      >
        {team1.logo && <img src={team1.logo} alt={`${team1.name} logo`} className="team-logo" />}
        {team1.name}
      </span>
      <span className={`vs ${isFinal ? 'final-vs' : ''}`}> vs </span>
      <span
        className={`team ${winner === team2.name ? 'selected-team' : winner && winner !== team2.name ? 'loser-team' : ''} ${
          isFinal ? 'final-team' : ''
        }`}
        onClick={() => team1.name !== 'TBD' && team2.name !== 'TBD' && onSelectWinner(roundId, match.id, team2.name)}
      >
        {team2.logo && <img src={team2.logo} alt={`${team2.name} logo`} className="team-logo" />}
        {team2.name}
      </span>
    </div>
  );
};

const ClubWorldCupPredictor = () => {
  const [groupRankings, setGroupRankings] = useState(initialGroups);
  const [currentRound, setCurrentRound] = useState(null);
  const [roundWinners, setRoundWinners] = useState({});
  const [activeRounds, setActiveRounds] = useState([]);
  const bracketRef = useRef(null);

  const findTeamByName = (teamName) => {
    if (teamName === 'TBD') return { name: 'TBD' };
    for (const group of Object.values(groupRankings)) {
      const team = group.find((t) => t.name === teamName);
      if (team) return team;
    }
    return { name: teamName }; 
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination || source.droppableId !== destination.droppableId) return;
    const groupLetter = source.droppableId.split('-')[1];
    const newRankings = { ...groupRankings };
    const groupTeams = [...newRankings[groupLetter]];
    const [removed] = groupTeams.splice(source.index, 1);
    groupTeams.splice(destination.index, 0, removed);
    newRankings[groupLetter] = groupTeams;
    setGroupRankings(newRankings);
  };

  const startKnockoutStage = () => {
    setCurrentRound('Round of 16');
    setActiveRounds(['Round of 16']);
    setRoundWinners({ roundOf16: {} });
  };

  const getMatchesForRound = (round) => {
    const matchWidth = 200;
    const horizontalGap = 300;
    const verticalGap = 80;

    const matches = [];

    if (round === 'Round of 16') {
      const games = [
        ['r16_0', [groupRankings.A[0], groupRankings.B[1]]],
        ['r16_1', [groupRankings.C[0], groupRankings.D[1]]],
        ['r16_2', [groupRankings.E[0], groupRankings.F[1]]],
        ['r16_3', [groupRankings.G[0], groupRankings.H[1]]],
        ['r16_4', [groupRankings.B[0], groupRankings.A[1]]],
        ['r16_5', [groupRankings.D[0], groupRankings.C[1]]],
        ['r16_6', [groupRankings.F[0], groupRankings.E[1]]],
        ['r16_7', [groupRankings.H[0], groupRankings.G[1]]],
      ];
      games.forEach(([id, teams], i) => {
        matches.push({ id, round, teams, position: { left: 0, top: i * verticalGap } });
      });
    }

    if (round === 'Quarter Finals') {
      const prev = roundWinners['Round of 16'] || {};
      const games = [
        ['qf_0', [findTeamByName(prev.r16_0), findTeamByName(prev.r16_1)]],
        ['qf_1', [findTeamByName(prev.r16_2), findTeamByName(prev.r16_3)]],
        ['qf_2', [findTeamByName(prev.r16_4), findTeamByName(prev.r16_5)]],
        ['qf_3', [findTeamByName(prev.r16_6), findTeamByName(prev.r16_7)]],
      ];
      games.forEach(([id, teams], i) => {
        matches.push({ id, round, teams, position: { left: matchWidth + horizontalGap, top: i * verticalGap + 40 } });
      });
    }

    if (round === 'Semi Finals') {
      const prev = roundWinners['Quarter Finals'] || {};
      const games = [
        ['sf_0', [findTeamByName(prev.qf_0), findTeamByName(prev.qf_1)]],
        ['sf_1', [findTeamByName(prev.qf_2), findTeamByName(prev.qf_3)]],
      ];
      games.forEach(([id, teams], i) => {
        matches.push({ id, round, teams, position: { left: matchWidth + 2 * horizontalGap, top: i * verticalGap + 80 } });
      });
    }

    if (round === 'Final') {
      const prev = roundWinners['Semi Finals'] || {};
      matches.push({
        id: 'final',
        round,
        teams: [findTeamByName(prev.sf_0), findTeamByName(prev.sf_1)],
        position: { left: matchWidth + 3 * horizontalGap, top: 200 },
      });
    }

    return matches;
  };

  const selectWinner = (roundId, matchId, teamName) => {
    const current = roundWinners[roundId] || {};
    setRoundWinners({
      ...roundWinners,
      [roundId]: { ...current, [matchId]: teamName },
    });
  };

const allWinnersSelected = (round) => {
  const matchIds = getMatchesForRound(round).map((m) => m.id);
  const roundData = roundWinners[round] || {};
  return matchIds.every((id) => roundData[id]);
};

  const proceedToNextRound = () => {
    const order = ['Round of 16', 'Quarter Finals', 'Semi Finals', 'Final'];
    const idx = order.indexOf(currentRound);
    if (idx < order.length - 1) {
      const next = order[idx + 1];
      setCurrentRound(next);
      setActiveRounds((prev) => [...prev, next]);
      setRoundWinners((prev) => ({ ...prev, [next]: {} }));
    }
  };

  return (

  <div className="container">
    <h1 className="title">Club World Cup 2025 Predictor</h1>
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="groups-container">
        {Object.entries(groupRankings).map(([groupLetter, teams]) => (
          <div key={groupLetter} className="group">
            <h3 className="group-title">Group {groupLetter}</h3>
            <Droppable droppableId={`group-${groupLetter}`}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="droppable-container"
                >
                  {teams.map((team, index) => (
                    <Draggable
                      key={`${groupLetter}-${team.name}`}
                      draggableId={`${groupLetter}-${team.name}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="draggable"
                        >
                          {team.logo && <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />}
                          {team.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>

    <button className="predict-button" onClick={startKnockoutStage}>
      Predict
    </button>

    {currentRound && (
      <div className="knockout-container">
        <h2 className="round-title">{currentRound}</h2>
        <div ref={bracketRef} className="bracket">
          {activeRounds.flatMap((round) => getMatchesForRound(round)).map((match) => (
            <div
              key={match.id}
              className="match-wrapper"
              style={{ position: 'absolute', left: `${match.position.left}px`, top: `${match.position.top}px` }}
            >
              <Match
                match={match}
                teams={match.teams}
                onSelectWinner={selectWinner}
                matchWinners={roundWinners}
                isFinal={match.id === 'final'}
              />
            </div>
          ))}
        </div>
        {allWinnersSelected(currentRound) && currentRound !== 'Final' && (
          <button className="predict-button" onClick={proceedToNextRound}>
            Next Round
          </button>
        )}
        {currentRound === 'Final' && allWinnersSelected('Final') && (
          <div className="champion-circle">
            <div className="winner-name">

                Champion: {" "}
            {(() => {
              const champion = findTeamByName(roundWinners['Final']?.['final']);
              return (
                <>
                  {champion?.name || 'TBD'}
                  {champion?.logo && <img src={champion.logo} alt={`${champion.name} logo`} className="team-logo" />}

                </>
              );
            })()} 
            </div>
            <button onClick={() => window.location.reload()} className="reset-button">Reset Prediction</button>
         
         
                      

          </div>
        )}
           

      </div>
    )}
  </div>
);
};

export default ClubWorldCupPredictor;