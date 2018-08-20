import React from 'react';
import { Link } from 'react-router-dom';
import './../scss/navigation.scss';

const Navigation = () => (
  <nav className="nav">
    <Link to="/">Home</Link>
    <Link to="/css">Css Sort</Link>
    <Link to="/encrypter">Encrypter</Link>
    <Link to="/host">Hosts</Link>
    <Link to="/html">HTML Tag Indent</Link>
    <Link to="/invalidation">Invalidation</Link>
    <Link to="/timestamp">Timestamp</Link>
    <Link to="/url">URL Parser</Link>
  </nav>
);

export default Navigation;
