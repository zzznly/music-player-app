import "./style.scss";
import MyTonesLogo from "@assets/images/icon/ico-logo-mytones.svg";
import { handleAuth } from "@utils/auth";

function Login() {
  return (
    <div className="login">
      <div className="login__head">
        <img className="login__logo" src={MyTonesLogo} alt="MyTones Logo"/>
        <p className="login__description">Web Music Player with React.js</p>
      </div>
      <div className="login__content">
        <button className="login__button" onClick={() => handleAuth()}>
          Login with Spotify 🎧
        </button>
      </div>
    </div>
  );
}

export default Login;
