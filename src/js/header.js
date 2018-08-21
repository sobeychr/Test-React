import React from 'react';
import { IoIosHome } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './../scss/header.scss';

const Header = ({ pageName }) => (
  <header className="header">
    <h1 className="header__title">
      {pageName !== 'Index' ? (
        <Link className="header__home" to="/">
          <IoIosHome />
        </Link>
      ) : (
        <span className="header__home">
          <IoIosHome />
        </span>
      )}
      {pageName}
    </h1>
  </header>
);

export default Header;
