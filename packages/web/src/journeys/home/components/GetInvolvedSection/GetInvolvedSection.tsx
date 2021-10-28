import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  grid-area: getInvolved;
  display: grid;
  min-height: 400px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

function GetInvolvedSection() {
  return (
    <Container>Get Involved Section</Container>
  )
}

export default GetInvolvedSection;