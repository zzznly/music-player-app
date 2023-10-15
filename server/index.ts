const express = require("express");
const request = require("request");
const dotenv = require("dotenv");

const port = 4000;

global.access_token = "";

dotenv.config();

let spotify_client_id = process.env.REACT_APP_CLIENT_ID;
let spotify_client_secret = process.env.REACT_APP_CLIENT_SECRET;

let spotify_redirect_uri = "http://localhost:5005/auth/callback";

let generateRandomString = function (length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let app = express();

app.get("/auth/login", (req, res) => {
  let scope = "streaming user-read-email user-read-private";
  let state = generateRandomString(16);

  let auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    redirect_uri: spotify_redirect_uri,
    scope,
    state,
  });

  res.redirect(
    "https://accounts.spotify.com/authorize/?" +
      auth_query_parameters.toString()
  );
});

// Q: 이거 타게하는방법? (포트 4000번 찔러야됨)
app.get("/auth/callback", (req, res) => {
  let code = req.query.code;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(spotify_client_id + ":" + spotify_client_secret).toString(
          "base64"
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  };
  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      global.access_token = body.access_token;
      res.redirect("/");
    }
  });
});

app.get("/auth/token", (req, res) => {
  res.json({ access_token: global.access_token });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
