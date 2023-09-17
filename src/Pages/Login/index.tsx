import { Link } from "react-router-dom";

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
  return (
    <div className="App">
      <header className="App-header">
        <Link className="btn-spotify" to={authUrl}>
          Login with Spotify
        </Link>
      </header>
    </div>
  );
}

export default Login;
