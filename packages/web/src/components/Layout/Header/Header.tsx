import React from 'react';
import styled from '@emotion/styled';
import Logo from './images/logo.png';

const Container = styled.div`
  padding: 16px 24px;
`;
function Header() {
  return (
    <Container>
      <img src={Logo} alt="JMI Alumni Logo" />
    </Container>
  )
}

export default Header;