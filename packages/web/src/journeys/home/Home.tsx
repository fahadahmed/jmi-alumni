import React from 'react';
import { GetInvolvedSection, HeroSection, HomeContainer, NewsSection, ProjectsSection } from './components';
function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <NewsSection />
      <GetInvolvedSection />
      <ProjectsSection />
    </HomeContainer>
  )
}

export default Home;