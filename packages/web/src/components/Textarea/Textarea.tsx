import React from 'react';
import styled from '@emotion/styled';

const StyledTextarea = styled.textarea`
  padding: 12px 16px;
  margin: 8px 0px;
  width: 100%;
  resize: none;
  height: 150px;

  font-family: 'Source Sans Pro';
  font-size: 16px;

  &::placeholder {
    color: #efefef;
  }

  &:focus {
    border-color: #2C6150;
    color: #2C6150;
    outline: none;
    box-shadow: 0px 0px 4px 0px #999999;
    border-radius: 0px;
  }
`;

function Textarea() {
  return (
    <StyledTextarea placeholder="Your message"></StyledTextarea>
  )
}

export default Textarea;