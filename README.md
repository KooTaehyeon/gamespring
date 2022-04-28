https://kootaehyeon.github.io/gamespring/

###📌 '기상청 관광코스별 관광지 상세 날씨 API활용'

## 🚗 Implement

### Stack

`Javascript` `React` `Styled-Components` `recoil` `axios`  
` http-proxy-middleware` ` react-router-dom`
` react-xml-parse`

#### ✅ API 활용

기상청 관광 코스별 상세 날씨 api를 이용해서 날씨를 정보를
주는 간단한 웹사이트 입니다.

#### ✅ 구현하면서 어려웠던점

api를 가져와보니 xml로 되어있었는데 xml로 되어 있는 구조는 처음이다보니
잘 몰라서 헤매었지만 react-xml-parser 라이브러리를 이용해서 xml 구조를
json 구조로 바꾸어 해결하였습니다.

## 🚗 Directory

```
├── public/
├── src/
│   ├── components/              - page components
│   ├── pages/                   - rendering pages
│   └── util/                    - LocalStorage
│
├── App.js                       - page rendering
├── index.js                     - entry point
├── setupProxy.js                - cors 에러 해결
├── atoms.js                     - recoil
├── README.md                    - 리드미(프리뷰, 배포링크, 코드컨벤션)
└── package.json                 - 사용 package 목록
```

### <br/>

###

## 🚗 Code Convention

### Getting Started

1. `clone` the repository,

```
$ git clone "https://github.com/KooTaehyeon/wanted-codestates-project-8.git"
```

2. `Install` dependencies,

```
$ npm install
```

3. `start` the project,

```
$ npm start
```
