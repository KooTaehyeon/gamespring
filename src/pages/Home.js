import React, { useState, useEffect } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { api } from '../atom';
import { setItems } from '../util/LocalStorage';
import Loading from '../components/Loading';
const Home = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useRecoilState(api);
  const [isApi, setIsApi] = useState(false);
  const PROXY = '/data';
  // 날씨용
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  console.log(year + month + day);
  const serviceKey =
    'Zlb1Vzz%2FXozCyf%2FKGFcPfYHNHsEo0DMxI1YIS5bD1y22HauG3TKirP8dr9aAVg8U5ZpSvWxEC2ppvuXNY7XyYA%3D%3D';
  useEffect(() => {
    defaultClient();
  }, []);
  function parseStr(dataSet) {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    setApiData(dataArr[1]);
    setItems(dataArr[1]);
    setIsApi(!isApi);
  }
  const defaultClient = () => {
    axios
      .get(
        `${PROXY}/1360000/TourStnInfoService/getTourStnVilageFcst?serviceKey=${serviceKey}&numOfRows=10&pageNo=8&CURRENT_DATE=${
          year + month + day
        }00&HOUR=24&COURSE_ID=1`
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
    <Container>
      {!isApi ? <Loading /> : null}
      <SubTitle>
        <span>게임 스프링</span> 사전과제
      </SubTitle>
      <button onClick={() => navigate('/Main')}>
        기상청 관광코스별 관광지 상세 날씨 API
      </button>
    </Container>
  );
};
const Container = styled.div`
  text-align: center;

  button {
    margin: 0 100px;
    width: 25%;
    height: 70px;
    border: 1px solid #000000;
    border-radius: 10px;
    background: #50bcdf;
    font-size: large;
    font-weight: bold;
    :hover {
      background: #fff;
      transition: 0.4s;
      border: 1px solid #fff;
    }
  }
`;

const SubTitle = styled.h2`
  font: normal 30px/1.5 'inherit';
  text-align: center;
  color: #444;
  margin-top: 70px;
  margin-bottom: 100px;
  span {
    font-weight: bold;
  }
`;

export default Home;
