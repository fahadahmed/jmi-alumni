import React from 'react';
import styled from '@emotion/styled';
import Input from '../../../../Input';
import Textarea from '../../../../Textarea';
import Button from '../../../../Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 0px;
`;

function ContactForm() {
  return (
    <div>
      <h4>Contact Form</h4>
      <StyledForm>
        <Input />
        <Input />
        <Textarea />
        <Button type="submit" title="Send" />
      </StyledForm>
    </div>
  )
}

export default ContactForm;
