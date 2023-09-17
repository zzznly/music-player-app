import "./style.scss";
import { Link } from "react-router-dom";
import MyTonesLogo from "@assets/images/icon/ico-logo-mytones.svg";

function Login(): JSX.Element {
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

  const testAccount: any = {
    email: "testzzznly@gmail.com",
    password: "test1234!!",
  };

  const handleCopyEmailPassword = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard: " + text))
      .catch(error => console.error("Error copying to clipboard:", error));
  };
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
        <div className="login__notice">
          이 프로젝트는 로그인을 위해 Spotify 계정이 필요합니다. <br />
          아래의 테스트 계정 (email, password) 을 사용해 로그인해주세요 🙂
        </div>
        <div className="login__test-account">
          {Object.keys(testAccount).map((key: string) => {
            return (
              <div className={`account-info-${key}`}>
                <span>{testAccount[key]}</span>
                <button
                  className="copy"
                  onClick={() => handleCopyEmailPassword(testAccount[key])}
                >
                  복사
                </button>
              </div>
            );
          })}
        </div>
        <Link className="button-spotify" to={authUrl}>
          Login with Spotify 🎧
        </Link>
      </div>
    </div>
  );
}

export default Login;
