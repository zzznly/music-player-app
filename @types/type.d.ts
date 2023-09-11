declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_CLIENT_ID: string;
    REACT_APP_CLIENT_SECRET: string;
    REACT_APP_AUTHORIZE_URL: string;
    REACT_APP_REDIRECT_URL: string;
  }
}
