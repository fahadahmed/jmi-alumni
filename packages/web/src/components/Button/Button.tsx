import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  border: none;
  padding: 12px 24px;
  background: #FA957C;

  font-family: 'Source Sans Pro';
  font-size: 16px;
  line-height: 16px;
  color: #FFFFFF;

  &:hover {
    background: #2C6150;
    cursor: pointer;
  }
`;
function Button() {
  return (
    <StyledButton>Contact Us</StyledButton>
  )
}

export default Button;