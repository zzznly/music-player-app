import "./style.scss";
import MyTonesLogo from "@assets/images/icon/ico-logo-mytones.svg";
import useSpotifyAuth from "@hooks/useSpotifyAuth";
import { getSpotifyAuthUrl, saveTokenParams } from "@utils/auth";
import { useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const handleLogin = () => {
    const authUrl = getSpotifyAuthUrl();
    window.location.href = authUrl;
  };

  return (
    <div className="login">
      <div className="login__head">
        <img className="login__logo" src={MyTonesLogo} alt="MyTones Logo" />
        <p className="login__description">Web Music Player with React.js</p>
      </div>
      <div className="login__content">
        <button className="login__button" onClick={handleLogin}>
          Login with Spotify 🎧
        </button>
      </div>
    </div>
  );
}

export default Login;
