import React from "react";
import { HeaderWrapper, NavMenu, UserImg } from "./Header.style";
import { appAuth, provider } from "../../firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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
        setUser(user);
        navigate("/home");
      } else navigate("/");
    });
  }, [userName]);

  const handleAuth = () => {
    !userName
      ? signInWithPopup(appAuth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(token, user);
            setUser(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
          })
      : signOut(appAuth).then(() => {
          dispatch(setSignOutState());
          navigate("/");
        });
  };

  return (
    <HeaderWrapper>
      <a href="/" className="logoCta">
        <img className="logo" src="./images/logo.svg" />
      </a>
      {!userName ? (
        <button className="loginBtn" onClick={handleAuth}>
          LOGIN
        </button>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" />
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
