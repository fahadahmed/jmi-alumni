import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode
}

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 104px 1fr 520px;
`;

function Layout({ children }: LayoutProps) {
  return (
    <MainContainer>
      <Header />
      {children}
      <Footer />
    </MainContainer>
  )
}

export default Layout;