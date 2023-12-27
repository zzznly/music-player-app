# 🎧 Mytones Music Player

Spotify Web API를 사용하여 개발한 음악 플레이어 사이트
<br/>
<br/>

## Dependencies

- react@18
- react-router-dom@6
- typescript@4
- react-query@4
- jotai@2
- styled-components@5

<br/>

## Directory

```
.
├─ @types // 전역으로 쓰이는 type을 정리한 폴더
├─ node_modules
├─ public
└─ src
   ├─ assets
   ├─ components // 컴포넌트를 atomic하게 정리한 폴더
   │  ├─ atoms
   │  ├─ molecules
   │  ├─ organisms
   │  └─ templates
   ├─ constants // 상수가 저장된 폴더
   ├─ hooks // 커스텀된 hook들이 저장된 폴더
   ├─ pages // page 들이 저장된 폴더
   ├─ service // 서비스 api가 정의된 폴더
   ├─ store // global state가 정의된 폴더
   ├─ styles // 스타일시트들이 저장된 폴더
   └─ utils // util 함수들이 저장된 폴더
```

<br/>

## Nice to haves (in process)
- 로그인 로직 개선 (Node.js 미들웨어 서버 구축) 👉🏻 feature/auth 브랜치
- styled-components 적용 👉🏻 refactor/styled-components 브랜치
- type 보완
- ...

<br/>
