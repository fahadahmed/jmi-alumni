import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
interface HomeContainerProps {
  children: ReactNode;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 32px;
  grid-gap: 32px;
  @media screen and (max-width: 425px) {
    padding: 16px;
    grid-gap: 16px;
  }
`;
function HomeContainer({ children }: HomeContainerProps) {
  return (
    <Container>
      {children}
    </Container>
  )
};

export default HomeContainer;