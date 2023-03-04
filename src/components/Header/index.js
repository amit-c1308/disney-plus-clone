import React from "react";
import { HeaderWrapper, NavMenu, UserImg } from "./Header.style";
import { appAuth, provider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";
import { useEffect } from "react";
import { AccountAction, AccountActionDropdown } from "../Header/Header.style";
import { checkLoginStatus, setUserLoginState } from "../../features/utils";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    appAuth.onAuthStateChanged(async (user) => {
      if (user) {
        if (!checkLoginStatus() || !userName) {
          setUser(user);
          setUserLoginState(user);
        }
      } else navigate("/");
    });
  }, [userName]);

  const handleAuth = () => {
    !userName
      ? signInWithPopup(appAuth, provider)
          .then((result) => {
            const user = result.user;
            setUser(user);
          })
          .catch((error) => {
            console.log(
              "An Error Occured ",
              error.code,
              " with message :",
              error.message
            );
          })
      : signOut(appAuth).then(() => {
          dispatch(setSignOutState());
          navigate("/").catch((err) => console.log(err.message));
        });
  };

  return (
    <HeaderWrapper>
      <a href="/" className="logoCta">
        <img className="logo" src="./images/logo.svg" alt="logo" />
      </a>
      {!userName ? (
        <button className="loginBtn" onClick={handleAuth}>
          LOGIN
        </button>
      ) : (
        <>
          <NavMenu>
            <a href="/#/home">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="/#/search">
              <img src="/images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
            <a href="/#/watchlist">
              <img src="/images/watchlist-icon.svg" alt="watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a href="/#/originals">
              <img src="/images/original-icon.svg" alt="originals" />
              <span>ORIGINALS</span>
            </a>
            <a href="/#/movies">
              <img src="/images/movie-icon.svg" alt="movies" />
              <span>MOVIES</span>
            </a>
            <a href="/#/series">
              <img src="/images/series-icon.svg" alt="series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <AccountAction>
            <UserImg src={userPhoto} alt={userName} />
            <AccountActionDropdown>
              <span onClick={handleAuth}>Sign Out</span>
            </AccountActionDropdown>
          </AccountAction>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
