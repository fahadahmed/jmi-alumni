import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from 'react-modal';


Modal.setAppElement('#___gatsby');
const data = [
  {
    id: 1,
    title: 'Scholarship fund 2020',
    byline: 'Raising for the deserving one.',
    featuredImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/article1.png?alt=media&token=0906e1b4-b081-45c5-a963-547895858b52',
    content: '<p>Dayare shauk mera Shehre aarzo mera “this is the land of my hopes - this is the land of my dreams”<p><p>To commemorate 100 glorious years of our beloved University we established a scholarship fund to help the underprivileged girls studying at the university. Our celebration was graced with the esteemed presence of  Hon. Prof. Najma Akhtar (Vice Chancellor JMI), Ms Arfa Khanum Sherwani and RJ Naved.</p><p>We feel so proud to mention here that during the live zoom celebration session we achieved the target amount set for the scholarship scheme.</p><p>We are also grateful to entire organising committee for organising such a wonderful and memorable event.</p>'
  },
  {
    id: 2,
    title: 'COVID-19 Fundraiser',
    byline: 'Our JMI Alumni VIC family and donated $10,000 to Helping Hands Foundation India towards Covid Home Isolation care services.',
    featuredImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/katt-yukawa-K0E6E0a0R3A-unsplash.jpg?alt=media&token=f8084665-433f-4365-b127-45e8b07bade7',
    content: '<p> Jamia Millia Islamia Alumni Association, Victoria has worked effectively in the past to provide help to the community through fund-raising in instances like Australian Bushfires 2019 and establishment of scholarships for female students at the Jamia University.</p><p>During the COVID crisis in India, the Alumni Association came together to raise funds to help underprivileged people who needed support due to COVID -19. The collected funds were used to provide medicines, supply of oxygen, online doctor consultations at the ground level. We had partnered with "Helping Hand " an NGO based in India. https://helpinghandf.org</p><p>With support from within the Association and wider community, we were able to achieve our target of 10,000 AUD within a week\'s time. We extend our heartfelt gratitude to all our donors who have continued to make donations even after the target collection amount was reached. We made an initial transfer of funds to Helping Hand Foundation based in Hyderabad India https://www.facebook.com/HelpingHandFoundationHyderabad</p><p>Considering the current pandemic plight in India we will continue with our endeavours to support the underprivileged. We will identify and collaborate with other not-for-profit organizations and will continue with our pledge to help our fellow Indians in these testing times.</p><p>We encourage you to ask any questions related to the objectives of our organization and the purpose of this fundraising. We look forward to your valuable contribution and support.</p>'
  },
  {
    id: 3,
    title: 'Annual Picnic 2021',
    byline: 'Bringing alumni members together.',
    featuredImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/article3.png?alt=media&token=85cc16eb-1f92-446f-b0c2-78f86f694b9b',
    content: '<p>We at Jamia Alumni Association, Victoria believes that picnics are a form of strengthening relationships. Face to face interaction helps to form a connection. In February 2021 we organised a picnic on a beautiful sunny day with lovely décor and some memorable food. We all walked away with some lovely memories and Samosa anecdotes that continue till date.</p><p>We at, Jamia Alumni Association Victoria attest in picnics as a way to empower our group and encourage civic participation. Picnics have a way to reinforce the idea that a community can organize itself in such a way that is beneficial for everyone involved.</p><p>The concept of picnic brought the entire group together at a finer level adding layers of laughter, food talks and of course planning of next get together.</p>'
  }
]
const Container = styled.div`
  // grid-area: news;
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

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: '20%',
    bottom: '0%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const LinkButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  font-family: 'Source Sans Pro';
  font-size: 16px;
  font-weight: 400;
  color: #E8CF4C;

  &:hover {
    text-decoration: underline;
  }
`;

function NewsSection() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  function openModal(articleId: number) {
    const article = data.filter((item) => item.id === articleId);
    setSelectedArticle(article[0]);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <SectionTitle>News and Events</SectionTitle>
      <ArticlesContainer>
        {data.map(article => (
          <>
            <Card key={article.id}>
              <img src={article.featuredImage} alt="" width="100%" />
              <CardContent>
                <CardTitle>{article.title}</CardTitle>
                <Byline>{article.byline}</Byline>
                <LinkButton type="button" onClick={() => openModal(article.id)}>Read More</LinkButton>
              </CardContent>
            </Card>

          </>
        ))}
      </ArticlesContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="Overlay"
        style={customStyles}
        contentLabel="Example Modal"
      >

        <img src={selectedArticle?.featuredImage} alt="" width="100%" />
        <h2>{selectedArticle?.title}</h2>
        <blockquote>{selectedArticle?.byline}</blockquote>
        <div dangerouslySetInnerHTML={{ __html: selectedArticle?.content }}></div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </Container>
  )
}

export default NewsSection;