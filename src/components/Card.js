import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { api } from '../atom';
import CardDetail from './CardDetail';
import { getItems } from '../util/LocalStorage';
const Card = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const datas = getItems('item');
    setApiData(datas.children[1].children);
  }, []);
  console.log(apiData, 'apidata');

  return (
    <AllCard>
      {apiData.map((item, i) => {
        return <CardDetail key={i} item={item} />;
      })}
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

export default Card;
