import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
//
import { useHistory } from 'react-router-dom';
//
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from '../features/user/userSlice';
// firebase
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
//imported images:
import homeLogo from '../images/home-icon.svg';
import searchLogo from '../images/search-icon.svg';
import watchLogo from '../images/watchlist-icon.svg';
import originalsLogo from '../images/original-icon.svg';
import moviesLogo from '../images/movie-icon.svg';
import seriesLogo from '../images/series-icon.svg';
import navbarLogo from '../images/logo.svg';
import './Header.scss';

const Header = (props) => {
  // redux:
  const dispatch = useDispatch();
  const history = useHistory();
  // userName gives us access to use useR name ( every time we using useSelector we are grabbing something from the store )
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  // end redux

  // google login popup
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  // end google popup

  return (
    <nav className="navbar fixed-top">
      <a className="logo">
        <img className="navbar__logo" src={navbarLogo} alt="Disney+" />
      </a>

      {!userName ? (
        <a className="login" onClick={handleAuth}>
          Login
        </a>
      ) : (
        <>
          <div className="nav__menu">
            <a href="/home">
              <img className="home__logo" src={homeLogo} alt="Home" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img className="home__logo" src={searchLogo} alt="Search" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img className="home__logo" src={watchLogo} alt="Watch list" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img className="home__logo" src={originalsLogo} alt="Originals" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img className="home__logo" src={moviesLogo} alt="Movies" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img className="home__logo" src={seriesLogo} alt="Series" />
              <span>SERIES</span>
            </a>
          </div>
        </>
      )}
      <a className="login" onClick={handleAuth}>
        Login
      </a>
    </nav>
  );
};

export default Header;
