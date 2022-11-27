import React from 'react';
import { HeroSection, HomeContainer, NewsSection, LeadershipTeam, EventsSection } from './components';

function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <NewsSection />
      <EventsSection />
      <LeadershipTeam />
    </HomeContainer>
  )
}

export default Home;