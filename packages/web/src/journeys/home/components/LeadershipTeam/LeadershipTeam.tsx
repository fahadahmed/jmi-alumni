import React from 'react';
import styled from '@emotion/styled';

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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 64px;
  margin-bottom: 96px;
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }
`;

const Heading = styled.h3`
  font-family: 'Source Sans Pro';
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #2C6150;
  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;
const Designation = styled.h4`
  font-family: 'Source Sans Pro';
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: #2C6150;
`;
const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 200px;
  border-radius: 100px;
  margin-bottom: 24px;
  @media screen and (max-width: 425px) {
    width: 100px;
  border-radius: 100px;
  }
`;

const data = [
  {
    id: 1,
    name: 'Syed Asif Hasan',
    designation: 'President',
    profileImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/asif.png?alt=media&token=3b7b7c97-ec04-4b76-b3fd-e73643f85f6f'
  },
  {
    id: 2,
    name: 'Akhtar Shamim',
    designation: 'Vice President',
    profileImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/akhtar.png?alt=media&token=544862ba-94e0-4380-be63-ca0ad9e1b453'
  },
  {
    id: 3,
    name: 'Shoaib Alam',
    designation: 'Treasurer',
    profileImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/shoaib.png?alt=media&token=b6bd89c5-4f89-4c9a-9dc2-11269ed55054'
  },
  {
    id: 4,
    name: 'Yasmin Siddiqui',
    designation: 'General Secretary',
    profileImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/yasmin.png?alt=media&token=34283874-0d48-450a-9442-49faa3b176e4'
  },
  {
    id: 5,
    name: 'Nazish Fatima',
    designation: 'Media & Communication',
    profileImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/nazish.png?alt=media&token=5c89f7c4-2b3b-4c94-a9c0-731111129ed9'
  },
  {
    id: 6,
    name: 'Saad Ahmad',
    designation: 'Advisor',
    profileImage: 'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/saad.png?alt=media&token=913fd056-35cc-46df-bc22-78be501b094f'
  }
]

function LeadershipTeam() {
  return (
    <div>
      <SectionTitle>Our Leadership Team</SectionTitle>
      <Container>
        {data.map(member => (
          <Team key={member.id}>
            <Image src={member.profileImage} alt={member.name} />
            <Heading>{member.name}</Heading>
            <Designation>{member.designation}</Designation>
          </Team>
        ))}
      </Container>
    </div>
  )
}

export default LeadershipTeam;