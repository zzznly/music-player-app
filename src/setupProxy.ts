/*

이 코드는 Node.js 환경에서 사용되는 Express 서버 애플리케이션에 프록시를 설정하는 코드입니다.
프록시는 클라이언트(브라우저)에서의 요청을 중간에 서버로 전달해주는 역할을 합니다.

1. http-proxy-middleware에서 createProxyMiddleware 함수를 가져옵니다.
2. module.exports를 사용하여 이 코드를 모듈로 내보냅니다. 이 모듈이 다른 파일에서 사용될 수 있도록 합니다.
3. 함수를 정의합니다. 이 함수는 Express 애플리케이션(app)을 인자로 받습니다.
4. app.use('/auth/**', ...)를 사용하여 /auth/** 경로로 들어오는 모든 요청에 대해 프록시 설정을 적용합니다.
    - app.use는 Express 애플리케이션에 미들웨어를 추가하는 메서드입니다.
    - '/auth/**'는 프록시를 적용할 경로를 나타냅니다. 여기서는 /auth/로 시작하는 모든 경로에 프록시를 적용합니다.
    - createProxyMiddleware({...})를 호출하여 프록시 미들웨어를 생성합니다.
        - target: 'http://localhost:4000'은 프록시 요청을 보낼 대상 서버의 주소를 나타냅니다.

결과적으로, 이 코드는 클라이언트가 /auth/** 경로로 요청을 보낼 때, 해당 요청을 http://localhost:4000 서버로 프록시하게 됩니다.

*/

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: any) {
  app.use(
    "/auth/**",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
