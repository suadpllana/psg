import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import psg from '../public/images/teams/psg.png';
import './index.css';

const Nav = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="desktop-nav">
        <Link to="/psg/home">
          <img className="home-logo" src={psg} alt="PSG Logo" />
        </Link>
        <Link to="/psg/news">News</Link>
        <Link to="/psg/matches">Matches</Link>
        <Link to="/psg/squad">Squad</Link>
        <Link to="/psg/fun">Fun</Link>
        <Link to="/psg/stats">Stats</Link>
        <Link to="/psg/about">About</Link>
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <button className="hamburger-btn" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link to="/psg/home" onClick={toggleMenu}>
              <img className="home-logo" src={psg} alt="PSG Logo" />
            </Link>
            <Link to="/psg/news" onClick={toggleMenu}>News</Link>
            <Link to="/psg/matches" onClick={toggleMenu}>Matches</Link>
            <Link to="/psg/squad" onClick={toggleMenu}>Squad</Link>
            <Link to="/psg/fun" onClick={toggleMenu}>Fun</Link>
            <Link to="/psg/stats" onClick={toggleMenu}>Stats</Link>
            <Link to="/psg/about" onClick={toggleMenu}>About</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;