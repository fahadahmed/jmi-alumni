import React from 'react';
import styled from '@emotion/styled'

const StyledInput = styled.input`
  border: none;
  margin: 8px 0px;
  padding: 12px 16px;
  border: 1px solid #e5e5e5;

  font-family: 'Source Sans Pro';
  font-size: 16px;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    border-color: #2C6150;
    color: #2C6150;
    outline: none;
    box-shadow: 0px 0px 4px 0px #999999;
  }
`;
interface InputProps {
  placeholderText: string;
  value?: string;
  required: boolean;
  onChange: (value: string) => void
}
function Input({ placeholderText, required, onChange }: InputProps) {
  return (
    <StyledInput type="text" placeholder={placeholderText} required={required} onChange={e => onChange(e.target.value)} />
  )
}

export default Input;