import React from 'react';
import styled from '@emotion/styled';
import { AboutSection, ContactForm, InstagramFeed } from './components';

const FooterContainer = styled.div`
  background-color: #efefef;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 64px;

  h4 {
    font-family: 'Source Sans Pro';
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    color: #FBC56F;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <ContactForm />
      <InstagramFeed />
      <AboutSection />
    </FooterContainer>
  )
}

export default Footer;