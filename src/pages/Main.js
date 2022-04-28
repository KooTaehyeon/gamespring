import React from 'react';
import Nav from '../components/Nav';
import Card from '../components/Card';
import styled from 'styled-components';

const Main = () => {
  return (
    <HomeContainer>
      <Nav />
      <Card />
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  background-color: rgb(233, 231, 231);
  width: 100%;
  height: 50vw;
  overflow: hidden;
`;

export default Main;
