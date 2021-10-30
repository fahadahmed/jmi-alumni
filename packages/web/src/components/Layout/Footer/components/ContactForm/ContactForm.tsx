import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input from '../../../../Input';
import Textarea from '../../../../Textarea';
import Button from '../../../../Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
`;
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
const StyledTextarea = styled.textarea`
  padding: 12px 16px;
  margin: 8px 0px 16px 0px;
  border: 1px solid #e5e5e5;
  border-radius: 0px;
  resize: none;
  height: 150px;

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

const SubmitMessage = styled.p`
  font-family: 'Source Sans Pro';
  font-size: 16px;
  color: #E8CF4C;
`;

function ContactForm() {
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    }
    const name = target.name.value;
    const email = target.email.value;
    const message = target.message.value;
    setSubmitMessage('Your message has been submitted.')
    console.log(name, email, message);
    document.getElementById("contact-form").reset();
    setTimeout(() => { setSubmitMessage(null) }, 3000);
  }
  return (
    <div>
      <h4>Contact Form</h4>
      <StyledForm onSubmit={handleSubmit} id="contact-form" >
        <StyledInput placeholder="Your name" type="text" required name="name" />
        <StyledInput placeholder="Your email" type="email" required name="email" />
        <StyledTextarea placeholder="Your message" required name="message" />
        <Button type="submit" title="Send" />
        {submitMessage && <SubmitMessage>{submitMessage}</SubmitMessage>}
      </StyledForm>
    </div>
  )
}

export default ContactForm;
