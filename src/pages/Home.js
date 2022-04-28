import React, { useState, useEffect } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import Nav from '../components/Nav';
import Card from '../components/Card';
import styled from 'styled-components';
import { setItems } from '../util/LocalStorage';
const Home = () => {
  const [apiData, setApiData] = useState([]);
  const serviceKey =
    'Zlb1Vzz%2FXozCyf%2FKGFcPfYHNHsEo0DMxI1YIS5bD1y22HauG3TKirP8dr9aAVg8U5ZpSvWxEC2ppvuXNY7XyYA%3D%3D';
  useEffect(() => {
    defaultClient();
  }, []);
  function parseStr(dataSet) {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    setApiData(dataArr[1]);
  }
  const dara = new Date();
  console.log(dara, '날짜');
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
  console.log(apiData, 'home');
  return (
    <HomeContainer>
      <Nav />
      <Card height={300} />
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  background-color: rgb(233, 231, 231);
  width: 100%;
  height: 100vw;
  overflow: hidden;
`;

export default Home;
