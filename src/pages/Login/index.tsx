import "./style.scss";
import { Link } from "react-router-dom";
import MyTonesLogo from "@assets/images/icon/ico-logo-mytones.svg";

function Login() {
  const authUrl = `${
    process.env.REACT_APP_AUTHORIZE_URL
  }?client_id=72ce168f7a5940c6a71cdb3a00784b5e&redirect_uri=${
    process.env.REACT_APP_REDIRECT_URL
  }&scope=${[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
  ].join("%20")}&response_type=token&show_dialog=true`;
  return (
    <div className="login">
      <div className="login__head">
        <img className="login__logo" src={MyTonesLogo} />
        <p className="login__description">
          Web Music Player with React.js
          {/* <span className="author">by. zzznly</span> */}
        </p>
      </div>
      <div className="login__content">
        <Link className="button-spotify" to={authUrl}>
          Login with Spotify 🎧
        </Link>
      </div>
    </div>
  );
}

export default Login;
