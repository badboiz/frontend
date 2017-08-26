import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>
  <nav className="Header">
    <Link to="/">Quicky</Link>
  </nav>;

export default Header;