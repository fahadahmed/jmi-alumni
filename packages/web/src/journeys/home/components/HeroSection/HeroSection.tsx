import React from 'react';
import styled from '@emotion/styled';
import Button from '../../../../components/Button';

const HeroContainer = styled.div`
  // grid-area: hero;
`;
const Container = styled.div`
  background-color: #2C6150;
  min-height: 600px;
  display: grid;
  justify-content: center;
  align-items: center;
`;
const OuterContainer = styled.div`
  padding: 0px 64px;
  margin-top: -96px;
`;
const MessageContainer = styled.div`
  background: #FFFFFF;
  border: 2px solid #2C6150;
  padding: 32px;
  text-align: center;
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Roboto Slab';
  font-weight: 600;
  font-size: 64px;
  color: #FFFFFF;
  text-align: center;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const SubTitle = styled.h2`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  margin: 0;
  color: #2C6150;
`;
const Text = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`;

function HomeSection() {
  return (
    <HeroContainer>
      <Container>
        <Title>
          <PageTitle>JMI Alumni Association<br />of Victoria Australia</PageTitle>
          <Button type="button" title="Become a member" variant="big" />
        </Title>
      </Container>
      <OuterContainer>
        <MessageContainer>
          <SubTitle>Our Message</SubTitle>
          <Text>JMI ALUMNI ASSOCIATION, VICTORIA, AUSTRALIA is an enlightened, resourceful and dynamic group of individuals residing in the state of Victoria who share a common vision of promoting the values of our institution, Jamia Millia Islamia. Members of the Association dearly uphold the principles of universal education, sharing knowledge and skills, supporting and caring for each other, responding to the needs of the broader community with empathy and compassion; both at a local level as well as overseas, particularly during unforeseen and unfortunate circumstances affecting fellow humans in anyway.  Association members fully embrace the spirit of giving back to the community in various capacities as well as promoting and preserving human rights globally.</Text>
        </MessageContainer>
      </OuterContainer>
    </HeroContainer>
  )
};

export default HomeSection;