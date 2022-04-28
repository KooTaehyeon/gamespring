import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getItems } from '../util/LocalStorage';

const Card = ({ height }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const datas = getItems('item');
    setdata(datas);
  }, []);
  console.log(data);

  return (
    <AllCard>
      <CardBox>아</CardBox>
      <CardBox>아</CardBox>
      <CardBox>아</CardBox>
      <CardBox>아</CardBox>
    </AllCard>
  );
};
const AllCard = styled.div`
  margin: 0 0.2em;
  width: 100%;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;
const CardBox = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 6px;
  padding: 21px;
  margin: 20px auto;
  box-shadow: rgb(140 141 146 / 25%) 3px 3px 8px 1px;
  color: rgb(0, 0, 0);
  transition: all 0.3s ease 0s;
  height: ${(props) => props.height}px;
  & p {
    line-height: 1.5;
  }
  & p:first-child {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 14px;
  }
  :hover {
    border: 2px solid #00aaff;
  }
`;

export default Card;
