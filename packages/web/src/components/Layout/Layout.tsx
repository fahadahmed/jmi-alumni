import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import './layout.css';
interface LayoutProps {
  children: ReactNode
}

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 144px 1fr 520px;
  @media screen and (max-width: 425px) {
    grid-template-rows: 144px auto 1fr;
  }
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