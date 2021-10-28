import React from 'react';
import styled from '@emotion/styled';

const data = [
  {
    id: 1,
    title: 'Scholarship fund 2020',
    byline: 'Raising for the deserving one.',
    featuredImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/article1.png?alt=media&token=0906e1b4-b081-45c5-a963-547895858b52',
    content: ''
  },
  {
    id: 2,
    title: 'COVID-19 Fundraiser',
    byline: 'Our JMI Alumni VIC family and donated $10,000 to Helping Hands Foundation India towards Covid Home Isolation care services.',
    featuredImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/katt-yukawa-K0E6E0a0R3A-unsplash.jpg?alt=media&token=f8084665-433f-4365-b127-45e8b07bade7',
    content: ''
  },
  {
    id: 3,
    title: 'Annual Picnic 2021',
    byline: 'Bringing alumni members together.',
    featuredImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/article3.png?alt=media&token=85cc16eb-1f92-446f-b0c2-78f86f694b9b',
    content: ''
  }
]
const Container = styled.div`
  grid-area: news;
`;
const SectionTitle = styled.h2`
  font-family: 'Source Sans Pro';
  font-size: 48px;
  font-weight: 600;
  color: #2C6150;
`;
const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`;
const Card = styled.div`
  background: #FFFFFF;
  border: 2px solid #2C6150;
`;
const CardContent = styled.div`
  padding: 16px;
`;
const CardTitle = styled.h3`
  font-family: 'Source Sans Pro';
  font-size: 32px;
  font-weight: 600;
  color: #2C6150;
`;
const Byline = styled.p`
  font-family: 'Source Sans Pro';
  font-size: 20px;
  font-weight: 400;
  color: #2C6150;
`;
function NewsSection() {
  return (
    <Container>
      <SectionTitle>News and Events</SectionTitle>
      <ArticlesContainer>
        {data.map(article => (
          <Card key={article.id}>
            <img src={article.featuredImage} alt="" width="100%" />
            <CardContent>
              <CardTitle>{article.title}</CardTitle>
              <Byline>{article.byline}</Byline>
            </CardContent>
          </Card>
        ))}
      </ArticlesContainer>
    </Container>
  )
}

export default NewsSection;