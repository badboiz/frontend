import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';

const Header = () =>
  <nav className="Header">
    <div className="Header__logos">
      <img src={logo} alt="logo" />
      <Link to="/" className="Header__home-link">
        qwiky
      </Link>
    </div>

    <Link to="/sell" role="button" className="Header__sell-link">
      New Listing
    </Link>
  </nav>;

export default Header;