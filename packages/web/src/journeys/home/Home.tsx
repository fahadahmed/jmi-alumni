import React from 'react';
import { HeroSection, HomeContainer, NewsSection, LeadershipTeam } from './components';
function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <NewsSection />
      <LeadershipTeam />
    </HomeContainer>
  )
}

export default Home;