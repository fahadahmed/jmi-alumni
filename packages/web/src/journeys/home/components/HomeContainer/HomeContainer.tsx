import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
interface HomeContainerProps {
  children: ReactNode;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px;
  grid-template-areas:
    'hero hero'
    'news news'
    'projects getInvolved';
    grid-gap: 32px;
`;
function HomeContainer({ children }: HomeContainerProps) {
  return (
    <Container>
      {children}
    </Container>
  )
};

export default HomeContainer;