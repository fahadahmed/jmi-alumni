import React from 'react';
import styled from '@emotion/styled';

const data = [
  {
    id: 1,
    instaImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/instagram%2F122474691_10157991945143089_5469239370553563381_n.jpeg?alt=media&token=36d0e785-6969-4783-97b2-2eaba5daaf56',
    altText: 'JMI Centenary Celebrations'
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
          <Polaroid><img src={item.instaImage} alt={item.altText} width="100%" /></Polaroid>
        ))}
      </Container>
    </div>
  )
}

export default InstagramFeed;