import React from 'react';
import styled from 'styled-components';
import img from '../assets/하늘.jpg';
const Nav = () => {
  return <NavContainer>기상청 관광코스별 관광지 상세 날씨 API</NavContainer>;
};

const NavContainer = styled.div`
  width: 100%;
  height: 300px;
  line-height: 300px;
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  background-image: url(${img});
`;
export default Nav;
