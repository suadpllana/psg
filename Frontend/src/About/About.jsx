import React from "react";
import { aboutInfo } from "./aboutInfo";
import "./About.scss";

const About = () => {
  const trophies = aboutInfo.filter((item) => item.type === "trophy");
  const history = aboutInfo.filter((item) => item.type === "history");
  const matches = aboutInfo.filter((item) => item.type === "match");

  return (
    <div className="about-container">
      <h1 className="about-title">About Paris Saint-Germain</h1>

      <section className="about-section">
        <h2 className="section-title">Trophy Cabinet</h2>
        <div className="trophy-layout">
          <div>
            <img src={trophies[0].image} alt="" />
          </div>
          <div className="trophy-info">
            <div>
              <h2>{trophies[0].competition}</h2>
              <span>{trophies[0].seasons}</span>
            </div>
          </div>

          <div className="trophy-info">
            <div>
              <h2>{trophies[1].competition}</h2>
              <span>{trophies[1].seasons}</span>
            </div>
          </div>
          <div>
            <img src={trophies[1].image} alt="" />
          </div>

          <div>
            <img src={trophies[2].image} alt="" />
          </div>
          <div className="trophy-info">
            <div>
              <h2>{trophies[2].competition}</h2>
              <span>{trophies[2].seasons.join(" ·  ")}</span>
            </div>
          </div>

          <div className="trophy-info">
            <div>
              <h2>{trophies[3].competition}</h2>
              <span>{trophies[3].seasons.join(" ·  ")}</span>
            </div>
          </div>

          <div>
            <img src={trophies[3].image} alt="" />
          </div>

          <div>
            <img src={trophies[4].image} alt="" />
          </div>
          <div className="trophy-info">
            <div>
              <h2>{trophies[4].competition}</h2>
              <span>{trophies[4].seasons.join(" ·  ")}</span>
            </div>
          </div>





         
          <div className="trophy-info">
            <div>
              <h2>{trophies[5].competition}</h2>
              <span>{trophies[5].seasons.join(" ·  ")}</span>
            </div>
          </div>
   <div>
            <img src={trophies[5].image} alt="" />
          </div>




            <div>
            <img src={trophies[6].image} alt="" />
          </div>
          <div className="trophy-info">
            <div>
              <h2>{trophies[6].competition}</h2>
              <span>{trophies[6].seasons}</span>
            </div>
          </div>





          
          <div className="trophy-info">
            <div>
              <h2>{trophies[7].competition}</h2>
              <span>{trophies[7].seasons}</span>
            </div>
          </div>
  <div>
            <img src={trophies[7].image} alt="" />
          </div>


        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Club History</h2>
        <div className="history-section">
          {history.map((era, index) => (
            <div key={index} className="history-entry">
              <h3 className="history-title">{era.title}</h3>
              <p className="history-description">{era.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historic Matches */}
      <section className="about-section">
        <h2 className="section-title">Historic Matches</h2>
        <div className="matches-table">
          <table>
            <thead>
              <tr>
                <th>Competition</th>
                <th>Date</th>
                <th>Opponent</th>
                <th>Score</th>
                <th>Significance</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr key={index}>
                  <td>{match.competition}</td>
                  <td>
                    {new Date(match.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td>{match.opponent}</td>
                  <td className="center-text">{match.score}</td>
                  <td>{match.significance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default About;
