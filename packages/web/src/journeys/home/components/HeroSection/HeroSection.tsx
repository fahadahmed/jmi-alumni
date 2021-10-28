import React from 'react';
import styled from '@emotion/styled';
import Button from '../../../../components/Button';

const Container = styled.div`
  grid-area: hero;
  background-color: #2C6150;
  min-height: 600px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro';
  font-weight: 500;
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

function HomeSection() {
  return (
    <Container>
      <Title>
        <PageTitle>JMI Alumni Association of Victoria <br /> Australia Incorporated</PageTitle>
        <Button type="button" title="Become a member" variant="big" />
      </Title>
    </Container>
  )
};

export default HomeSection;