import React from 'react';
import styled from '@emotion/styled';
import { AboutSection, ContactForm, InstagramFeed } from './components';

const FooterContainer = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 64px;
  background-color: #3A3A3A;
  padding: 32px;
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-gap:0;
  }

  h4 {
    font-family: 'Source Sans Pro';
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    color: #E8CF4C;
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