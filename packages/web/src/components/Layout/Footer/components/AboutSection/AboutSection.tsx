import React from 'react';
import styled from '@emotion/styled';

import FacebookIcon from './images/facebook.svg';
import TwitterIcon from './images/twitter.svg';
import LinkedInIcon from './images/linkedin.svg';
import InstagramIcon from './images/instagram.svg';


const Container = styled.div`
  margin: 40px 0px;

  p {
    font-family: 'Source Sans Pro';
    font-size: 20px;
    color: #FFFFFF;
    
    a {
      color: #E8CF4C;

      &:hover {
        color: #000000;
      }
    }
  }
`;
const Link = styled.a`
  padding: 8px;
`;
function AboutSection() {
  return (
    <div>
      <h4>About JMI Alumni VIC Chapter</h4>
      <Container>
        <p>JMI Alumni Association of Victoria, Australia Incorporated is a registered body under Section 8 of Association Reform Act 2012.  The Association was formally registered with Consumer Affairs Victoria on 21 May 2021.</p>
        <p><strong>Links</strong></p>
        <p>
          <a href="https://www.jmi.ac.in/" target="_blank">Jamia Millia Islamia Website</a>
          <br />
          <a href="https://aajmi.co.in/" target="_blank">JMI Alumni Website</a>
        </p>
        <p><strong>Socials</strong></p>
        <Link href=""><img src={FacebookIcon} alt="facebook" width="48" /></Link>
        <Link href=""><img src={TwitterIcon} alt="twitter" width="48" /></Link>
        <Link href=""><img src={LinkedInIcon} alt="linkedin" width="48" /></Link>
        <Link href=""><img src={InstagramIcon} alt="instagram" width="48" /></Link>
      </Container>
    </div>
  )
}
export default AboutSection;