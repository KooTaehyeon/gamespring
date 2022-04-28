https://kootaehyeon.github.io/gamespring/

###📌 '기상청 관광코스별 관광지 상세 날씨 API활용'

🚗
스택

Javascript React Styled-Components recoil react-xml-parser react-router-dom

✅ api 활용

기상청 관광 코스별 상세 날씨 api를 이용해서 날씨를 정보를
주는 간단한 웹사이트 입니다.

✅ 구현하면서 어려웠던 점

api를 가져와보니 xml로 되어있었는데 xml로 되어 있는 구조는 처음이다보니
잘 몰라서 헤매었지만 react-xml-parser 라이브러리를 이용해서 xml 구조를
json 구조로 바꾸어 해결하였습니다.

🚗 Directory

├── public/

├── src/

│ ├── components/ - page components
│ ├── pages/ - rendering pages
│ ├── util/ - LocalStorage
│
├── atom.js - state 저장 및 관리
├── App.js - page rendering
├── index.js - entry point
├── setupProxy.js - cors 에러 해결
├── README.md - 리드미(프리뷰, 배포링크, 코드컨벤션)
└── package.json - 사용 package 목록

🚗 Code Convention

Getting Started
clone the repository,
$ git clone "https://github.com/wanted-Team4/wanted-codestates-project-4-3.git"
Install dependencies,
$ npm install
start the project,
$ npm start
