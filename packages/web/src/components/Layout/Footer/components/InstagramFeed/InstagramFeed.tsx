import React from 'react';
import styled from '@emotion/styled';

const data = [
  {
    id: 1,
    instaImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/instagram%2Finsta1.png?alt=media&token=ea220916-39f6-4e52-a0ef-51f969f78c22',
    altText: 'JMI Centenary Celebrations'
  },
  {
    id: 2,
    instaImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/instagram%2Finsta2.png?alt=media&token=9c625fcc-c9f5-444d-9664-dcf5b0a953f5',
    altText: ''
  },
  {
    id: 3,
    instaImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/instagram%2Finsta3.png?alt=media&token=7db6e618-a311-48da-92d4-166150cfd800',
    altText: ''
  },
  {
    id: 4,
    instaImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/instagram%2Finsta4.png?alt=media&token=8e5eb7ec-4fda-4733-b641-1d8beb02a552',
    altText: ''
  },
  {
    id: 5,
    instaImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/instagram%2Finsta5.png?alt=media&token=b52cbce3-95c6-4836-8ee2-9bda1e704505',
    altText: ''
  },
  {
    id: 6,
    instaImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/instagram%2Finsta6.png?alt=media&token=a47bb668-e45d-4bad-909c-98bf03caedbf',
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
          <Polaroid key={item.id}><img src={item.instaImage} alt={item.altText} width="100%" /></Polaroid>
        ))}
      </Container>
    </div>
  )
}

export default InstagramFeed;