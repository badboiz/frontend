import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>
  <nav className="Header">
    <Link to="/" className="Header__home-link">
      Quicky
    </Link>

    <Link to="/sell" role="button" className="Header__sell-link">
      New Listing
    </Link>
  </nav>;

export default Header;