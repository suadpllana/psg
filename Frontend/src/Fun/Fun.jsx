
import React, { useState, useEffect } from 'react';
import { psgPlayers, quizQuestions, formations } from './entertainment';
import './Fun.scss';
import ClubWorldCupPredictor from './ClubWorldCupPredictor';

const Fun = () => {
  const [difficulty, setDifficulty] = useState('easy'); // Default to easy
  const [questions, setQuestions] = useState(quizQuestions.easyQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Update questions when difficulty changes
  useEffect(() => {
    if (difficulty === 'easy') {
      setQuestions(quizQuestions.easyQuestions);
    } else if (difficulty === 'intermediate') {
      setQuestions(quizQuestions.intermediateQuestions);
    } else if (difficulty === 'hard') {
      setQuestions(quizQuestions.hardQuestions);
    }
    // Reset quiz state when difficulty changes
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer('');
    setShowFeedback(false);
    setIsCorrect(false);
    setQuizCompleted(false);
  }, [difficulty]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;
    const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) setScore(score + 1);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer('');
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setShowFeedback(false);
    setIsCorrect(false);
    setQuizCompleted(false);
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const [lineup, setLineup] = useState(Array(11).fill(null));
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formation, setFormation] = useState('4-3-3');

  const handleCircleClick = (index) => {
    setSelectedPosition(index);
    setShowModal(true);
  };

  const handlePlayerSelect = (player) => {
    const newLineup = [...lineup];
    newLineup[selectedPosition] = player;
    setLineup(newLineup);
    setShowModal(false);
    setSelectedPosition(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPosition(null);
  };

  const handleFormationChange = (e) => {
    setFormation(e.target.value);
    setLineup(Array(11).fill(null));
  };

  return (
    <>
      <div className="fun-container">
        <h1 className="fun-title">PSG Fun Zone</h1>

        <section className="fun-section">
          <h2 className="section-title">PSG Trivia Quiz</h2>
          <div className="difficulty-buttons">
            <button
              className={`difficulty-button ${difficulty === 'easy' ? 'active' : ''}`}
              onClick={() => handleDifficultyChange('easy')}
            >
              Easy
            </button>
            <button
              className={`difficulty-button ${difficulty === 'intermediate' ? 'active' : ''}`}
              onClick={() => handleDifficultyChange('intermediate')}
            >
              Intermediate
            </button>
            <button
              className={`difficulty-button ${difficulty === 'hard' ? 'active' : ''}`}
              onClick={() => handleDifficultyChange('hard')}
            >
              Hard
            </button>
          </div>
          {quizCompleted ? (
            <div className="quiz-completed">
              <h3>Quiz Completed!</h3>
              <p>Your Score: {score} / {questions.length}</p>
              <p>
                {score >= 8
                  ? "Fantastic! You're a PSG legend!"
                  : score >= 5
                  ? "Great job, PSG fan!"
                  : "Keep practicing, young star!"}
              </p>
              <button className="quiz-button" onClick={resetQuiz}>
                Try Again
              </button>
            </div>
          ) : (
            <div className="quiz-container">
              <h3 className="question-title">
                Question {currentQuestionIndex + 1}: {currentQuestion.question}
              </h3>
              <div className="quiz-options">
                {currentQuestion.options.map((option, index) => {
                  const isCorrectOption = option === currentQuestion.correctAnswer;
                  const isSelectedOption = option === selectedAnswer;
                  let optionClass = '';

                  if (showFeedback) {
                    if (isCorrectOption) {
                      optionClass = 'correct';
                    } else if (isSelectedOption && !isCorrect) {
                      optionClass = 'incorrect';
                    }
                  }

                  return (
                    <label key={index} className={`quiz-option ${optionClass}`}>
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        checked={isSelectedOption}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        disabled={showFeedback}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
              {showFeedback && (
                <p className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                  {isCorrect
                    ? 'Correct!'
                    : `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`}
                </p>
              )}
              <button
                className={`quiz-button`}
                onClick={showFeedback ? handleNextQuestion : handleAnswerSubmit}
                disabled={!selectedAnswer && !showFeedback}
              >
                {showFeedback ? 'Next Question' : 'Submit Answer'}
              </button>
              <p>Question {currentQuestionIndex + 1} / {questions.length}</p>
            </div>
          )}
        </section>

        <section className="fun-section">
          <h2 className="section-title">PSG Lineup Builder</h2>
          <div className="formation-selector">
            <label htmlFor="formation">Formation: </label>
            <select id="formation" value={formation} onChange={handleFormationChange}>
              {Object.keys(formations).map((formationName) => (
                <option key={formationName} value={formationName}>
                  {formationName}
                </option>
              ))}
            </select>
          </div>
          <div className="field-container">
            <div className="field">
              {formations[formation].map((pos, index) => (
                <div
                  key={pos.id}
                  className="player-position"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                  }}
                  onClick={() => handleCircleClick(index)}
                >
                  <span className={lineup[index] ? 'player-name' : 'add-player'}>
                    {lineup[index] ? (
                      <>
                        <img src={lineup[index].image} alt="" />
                      </>
                    ) : (
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: '#ccc',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                        }}
                      >
                        +
                      </div>
                    )}
                  </span>
                  <span style={{ fontSize: '12px' }}>
                    {lineup[index]?.name.split(' ').slice(-1)[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3 className="modal-title">
                Select a Player for {formations[formation][selectedPosition]?.role.toUpperCase()}
              </h3>
              <div className="player-list">
                {psgPlayers
                  .filter((player) => {
                    const role = formations[formation][selectedPosition]?.role;
                    return (
                      (role === 'gk' && player.position === 'Goalkeeper') ||
                      (role === 'def' && player.position.includes('Defender')) ||
                      (role === 'mid' && player.position.includes('Midfielder')) ||
                      (role === 'fwd' && player.position.includes('Forward'))
                    );
                  })
                  .map((player) => (
                    <div
                      key={player.id}
                      className="player-item"
                      onClick={() => handlePlayerSelect(player)}
                    >
                      <span>
                        <img src={player.image} alt="" /> {player.name}
                      </span>
                      <span>({player.position})</span>
                    </div>
                  ))}
              </div>
              <button className="modal-close" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <ClubWorldCupPredictor />
    </>
  );
};

export default Fun;