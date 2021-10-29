import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  border: none;
  padding: 12px 24px;
  background: #E8CF4C;
  border: 2px solid #E8CF4C;

  font-family: 'Source Sans Pro';
  font-size: 16px;
  line-height: 16px;
  color: #2C6150;

  &:hover {
    background: #2C6150;
    color: #FFFFFF;
    border: 2px solid #2C6150;
    cursor: pointer;
  }
`;

const LargeButton = styled(StyledButton)`
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  padding: 16px 32px;
  margin: 40px 0px;

  &:hover {
    border: 2px solid #E8CF4C;
    color: #E8CF4C;
  }
`;

type ButtonType = 'button' | 'submit' | 'reset';
interface Props {
  title: string;
  type: ButtonType;
  variant?: string;
}
function Button({ title, type, variant }: Props) {
  return (
    variant === 'big' ? <LargeButton type={type}>{title}</LargeButton> : <StyledButton type={type}>{title}</StyledButton>
  )
}

export default Button;