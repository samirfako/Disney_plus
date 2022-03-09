import React from 'react';
import homeImg from '../images/home-icon.svg';
import navbar__logo from '../images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <nav className="navbar fixed-top">
      <a className="logo">
        <img className="navbar__logo" src={navbar__logo} alt="Disney+" />
      </a>
      <div className="nav__menu">
        <a href="/home">
          <img className="home__logo" src={homeImg} alt="Home" />
          <span>HOME</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
