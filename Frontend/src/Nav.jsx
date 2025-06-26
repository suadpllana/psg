import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import psg from '../public/images/teams/psg.png';
import './index.css';

const Nav = () => {
  const [isAdmin, setIsAdmin] = useState(false);


  return (
    <nav>
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
  );
};

export default Nav;