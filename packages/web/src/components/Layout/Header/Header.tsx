import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Logo from './images/logo.png';

const Container = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
`;


function Header() {
  return (
    <Container>
      <Link to="/"><img src={Logo} alt="JMI Alumni Logo" width="144px" height="144px" /></Link>
    </Container>
  )
}

export default Header;