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
const Byline = styled.p`
  font-family: 'Source Sans Pro';
  font-size: 20px;
  font-weight: 400;
  color: #2C6150;
`;

const eventImages = [
  'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/jmifoundation2022%2F02A6ABFC-985B-460F-9C33-2D38BAC3E353.jpg?alt=media&token=2b2f8d8f-7c2b-4b74-94b2-2bd1fb352de5',
  'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/jmifoundation2022%2F5D9F7D31-8343-4C3E-85AC-33A3C2DFE4D5.jpg?alt=media&token=151aa205-a958-406c-b220-81fa1e28d1ca',
  'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/jmifoundation2022%2F50530452-501F-494B-91BF-873F278E9DC8.jpg?alt=media&token=a6ff4f24-3e7f-4d72-9c26-02ee33316c46',
  'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/jmifoundation2022%2F62A5AA2D-6593-4F9D-BAB3-E383E15401F0.jpg?alt=media&token=24d47e9d-6e2b-47d1-b389-f844cee8c8a5',
  'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/jmifoundation2022%2FA1AEBEF1-B38A-4C25-B761-BAD66C575FE8.jpg?alt=media&token=9570aea0-ecfa-4486-b7ff-5fcceae3eec9',
  'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/jmifoundation2022%2FB9E5ABDF-79A4-432E-A50F-2A6EEA22740F.jpg?alt=media&token=12619539-9fb2-45d8-8684-20b57bbd2e8c',
  'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/jmifoundation2022%2FBDBC8BD6-1AB1-4CDA-9F44-BA86613D99FA.jpg?alt=media&token=75d8a061-7226-4934-bc75-25a45be4ff71',
  'https://firebasestorage.googleapis.com/v0/b/jmi-alumni-vic-au-chapter.appspot.com/o/jmifoundation2022%2FCopy%20of%20E2FA5407-8E90-44E2-80AB-30D634DAB457.jpg?alt=media&token=4370bf05-9b12-4db8-9aa8-da39b967ad09',
]

function EventsSection() {
  return (
    <div>
      <SectionTitle>Our Latest Events</SectionTitle>
      <Byline>The annual dinner for Jamia's 102nd Foundation Day hosted at Waterview Boulevard, Craigeburn.</Byline>
      <Carousel cols={1} rows={1} gap={10} loop>
        {eventImages.map((eventImage, index) => (
          <Carousel.Item>
            <img width="100%" src={eventImage} key={index} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default EventsSection;