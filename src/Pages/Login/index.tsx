import "./style.scss";
import { Link } from "react-router-dom";
import MyTonesLogo from "@assets/images/icon/ico-logo-mytones.svg";
import { useAuthStore } from "@store/auth/useAuth";

function Login(): JSX.Element {
  const { authUrl } = useAuthStore();

  return (
    <div className="login">
      <div className="login__head">
        <img className="login__logo" src={MyTonesLogo} />
        <p className="login__description">React.js - Web Music Player</p>
      </div>
      <div className="login__content">
        <a className="button-spotify" href="http://localhost:4000/auth/login">
          {/* Q: 앞에 localhost:4000을 빼버리면 리다이렉트가 안됨 */}
          Login with Spotify 🎧
        </a>
      </div>
    </div>
  );
}

export default Login;
