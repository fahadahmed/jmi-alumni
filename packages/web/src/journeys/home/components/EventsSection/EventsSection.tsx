import React from 'react';
import styled from '@emotion/styled';
import Carousel from 'better-react-carousel';

const SectionTitle = styled.h2`
  font-family: 'Source Sans Pro';
  font-size: 48px;
  font-weight: 600;
  color: #2C6150;
  @media screen and (max-width: 425px) {
    font-size: 32px;
    text-align: center;
  }
`;

const layout = [
  {
    breakpoint: 1200,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true,
    autoplay: 3000
  },
  {
    breakpoint: 800,
    cols: 2,
    rows: 1,
    gap: 10,
    loop: true,
    autoplay: 3000
  },
  {
    breakpoint: 400,
    cols: 1,
    rows: 1,
    gap: 10,
    loop: true,
    autoplay: 3000
  }
]

function EventsSection() {
  return (
    <div>
      <SectionTitle>Our Latest Events</SectionTitle>
      <Carousel cols={4} rows={1} gap={10} loop responsiveLayout={layout} mobileBreakpoint={767}>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=4" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=5" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default EventsSection;