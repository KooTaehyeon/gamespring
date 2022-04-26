const express = require('express');
const router = express.Router();
const convert = require('xml-js');
const request = require('request');

const HOST =
  'http://apis.data.go.kr/1360000/TourStnInfoService/getTourStnVilageFcst?';

const SERVICE_KEY =
  'Zlb1Vzz%2FXozCyf%2FKGFcPfYHNHsEo0DMxI1YIS5bD1y22HauG3TKirP8dr9aAVg8U5ZpSvWxEC2ppvuXNY7XyYA%3D%3D';

const requestUrl = `${
  (HOST, SERVICE_KEY)
}&numOfRows=10&pageNo=1&CURRENT_DATE=2022042610&HOUR=24&COURSE_ID=1`;

request.get(requestUrl, (err, res, body) => {
  if (err) {
    console.log(`err => ${err}`);
  } else {
    if (res.statusCode == 200) {
      let result = body;

      console.log(`body data => ${result}`);

      let xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });

      console.log(`xml to json => ${xmlToJson}`);
    }
  }
});
