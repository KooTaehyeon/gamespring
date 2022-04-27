import React, { useState, useEffect } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
const Home = () => {
  const [apiData, setApiData] = useState([]);
  const serviceKey =
    'Zlb1Vzz%2FXozCyf%2FKGFcPfYHNHsEo0DMxI1YIS5bD1y22HauG3TKirP8dr9aAVg8U5ZpSvWxEC2ppvuXNY7XyYA%3D%3D';
  useEffect(() => {
    defaultClient();
  }, []);
  function parseStr(dataSet) {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    console.log(dataArr, 'data');
    setApiData(dataArr[1]);
  }

  const defaultClient = () => {
    axios
      .get(
        `http://apis.data.go.kr/1360000/TourStnInfoService/getTourStnVilageFcst?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&CURRENT_DATE=2022042610&HOUR=24&COURSE_ID=1`
      )
      .then((res) => {
        const dataSet = res.data;

        parseStr(dataSet);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(apiData.children[1], 'api');
  return <div>홈</div>;
};

export default Home;
