import React from 'react';
import styled from '@emotion/styled';

const data = [
  {
    id: 1,
    instaImage: '',
    altText: ''
  },
  {
    id: 2,
    instaImage: '',
    altText: ''
  },
  {
    id: 3,
    instaImage: '',
    altText: ''
  },
  {
    id: 4,
    instaImage: '',
    altText: ''
  },
  {
    id: 5,
    instaImage: '',
    altText: ''
  },
  {
    id: 6,
    instaImage: '',
    altText: ''
  },
  {
    id: 7,
    instaImage: '',
    altText: ''
  },
  {
    id: 8,
    instaImage: '',
    altText: ''
  },
  {
    id: 9,
    instaImage: '',
    altText: ''
  },
]

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin: 40px 0px;
`;

const Polaroid = styled.div`
  background: #FFFFFF;
  height: 96px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

function InstagramFeed() {
  return (
    <div>
      <h4>Instagram Feed</h4>
      <Container>
        {data.map(item => (
          <Polaroid>{item.id}</Polaroid>
        ))}
      </Container>
    </div>
  )
}

export default InstagramFeed;