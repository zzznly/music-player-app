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
          Login with Spotify 🎧
        </a>
        {/* 
            Q: 앞에 localhost:4000을 빼버리면 리다이렉트가 안됨.
              Proxy 설정에 의해 5005번 서버를 찌르는것처럼 보이지만 사실은 4000번을 찌르고있어야하는데
              왠지 계속 자동으로 5005번으로 들어가서 동작이 안되는거같음. 어떻게해야 이 설정을 고칠수있을지?
              (+) 추가로, server 코드에서 auth/callback 호출시의 로직이 동작하지않음. 
                  이것도 4000번을 찔러야만 동작하는 코드인데 5005/auth/callback으로 호출되고있다보니 안타는것으로 추정
        */}
      </div>
    </div>
  );
}

export default Login;
