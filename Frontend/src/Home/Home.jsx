import React, { useState, useEffect } from "react";
import uclWinners from "../../public/images/uclWinners.png";
import { matchesInfo } from "../Matches/matchesInfo";
import axios from "axios";
import "./Home.scss";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
 import placeholder from "../../public/images/placeholder.png"
const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://psg-backend-a8ys.onrender.com/news")
      .then((res) => {
          const sortedNews = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setNews(res.data)
      } )
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError("Failed to load news.");
      });
  }, []);

  const recentMatches = matchesInfo.slice(-8);
  const latestNews = news.slice(0, 5);
  const matchesPerPage = 4;
  const totalPages = Math.ceil(recentMatches.length / matchesPerPage);
  const currentMatches = recentMatches.slice(
    currentPage * matchesPerPage,
    (currentPage + 1) * matchesPerPage
  );

  return (
    <div className="home">
      <div className="header">
        <img src={uclWinners} alt="UCL Winners" />
        <div className="header-info">
          <h1>Welcome</h1>
          <p>Here you can find everything about Paris Saint Germain</p>
        </div>
      </div>

      <section className="matches-section">
        <h2 className="section-title">Recent Matches</h2>
        <div className="matches-grid-container">
          <div className="matches-grid">
            {currentMatches.map((match, index) => (
              <div
                key={index}
                onClick={() => navigate(`/psg/matches/${match.id}`)}
                className="match-card"
              >
                <div className="match-card-header">
                  <img
                    src={match.homeTeamImage}
                    alt={`${match.homeTeam} logo`}
                    className="team-logo"
                  />
                  <span className="match-score">{match.score}</span>
                  <img
                    src={match.awayTeamImage}
                    alt={`${match.awayTeam} logo`}
                    className="team-logo"
                  />
                </div>
                <p className="match-date">
                  {match.date} - {match.venue}
                </p>
                <p className="match-teams">
                  {match.homeTeam} vs {match.awayTeam}
                </p>
              </div>
            ))}
          </div>
          <div className="navigation">
            <button
              className="nav-btn prev"
              onClick={() =>
                setCurrentPage((currentPage - 1 + totalPages) % totalPages)
              }
              disabled={currentPage === 0}
            >
              Previous
            </button>
            <button
              className="nav-btn next"
              onClick={() => setCurrentPage((currentPage + 1) % totalPages)}
              disabled={currentPage === 1}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <section className="news-section">
        <h2 className="section-title">Latest News</h2>
        <div className="news-list">
          {latestNews.map((news, index) => (
            <div
              onClick={() => navigate(`/psg/news/${news._id}`)}
              key={index}
              className="news-item"
            >
              <img
                style={{ width: "60%", height: "60%" }}
                src={news.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
                alt=""
              />
              <h3 className="news-title">{news.title}</h3>
              <p className="news-summary">{news.summary}</p>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
