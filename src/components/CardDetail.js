import React from 'react';
import styled from 'styled-components';
const CardDetail = ({ item }) => {
  return (
    <CardBox>
      <div>날짜: {item.children[0].value}</div>
      <div>지역: {item.children[4].value}</div>
      <div>코스이름:{item.children[8].value}</div>
      <hr />
      <span>풍향:{item.children[10].value}</span>
      <span>풍속:{item.children[11].value}</span>
      <div>기온:{item.children[9].value}</div>
    </CardBox>
  );
};

const CardBox = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 6px;
  padding: 21px;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: rgb(140 141 146 / 25%) 3px 3px 8px 1px;
  color: rgb(0, 0, 0);
  transition: all 0.3s ease 0s;
  height: auto;
  :hover {
    border: 2px solid #00aaff;
  }
`;

export default CardDetail;
