import React from 'react';
import { IoIosHome } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './../scss/header.scss';

const Header = ({ pageName }) => (
  <header className="header">
    <h1 className="header__title">
      <Link className="header__home" to="/">
        <IoIosHome />
      </Link>
      {pageName}
    </h1>
  </header>
);

export default Header;
