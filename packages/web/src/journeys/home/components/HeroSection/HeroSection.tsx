import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from 'react-modal';
import Button from '../../../../components/Button';

Modal.setAppElement('#___gatsby');
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


const HeroContainer = styled.div`
  // grid-area: hero;
`;
const Container = styled.div`
  background-color: #2C6150;
  min-height: 600px;
  display: grid;
  justify-content: center;
  align-items: center;
`;
const OuterContainer = styled.div`
  padding: 0px 64px;
  margin-top: -96px;
  @media screen and (max-width: 425px) {
    padding: 0px 24px;
    margin-top: -112px;
  }
`;
const MessageContainer = styled.div`
  background: #FFFFFF;
  border: 2px solid #2C6150;
  padding: 32px;
  text-align: center;
  @media screen and (max-width: 425px) {
    padding: 16px;
    text-align: left;
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Roboto Slab';
  font-weight: 600;
  font-size: 64px;
  color: #FFFFFF;
  text-align: center;
  @media screen and (max-width: 425px) {
    font-size: 32px;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const SubTitle = styled.h2`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  margin: 0;
  color: #2C6150;
  @media screen and (max-width: 425px) {
    font-size: 32px;
    line-height: 40px;
    text-align: center;
  }
`;
const Text = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  @media screen and (max-width: 425px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const ModalText = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

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

function HomeSection() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <HeroContainer>
      <Container>
        <Title>
          <PageTitle>JMI Alumni Association<br />of Victoria Australia</PageTitle>
          <Button type="button" title="Become a member" variant="big" />
        </Title>
      </Container>
      <OuterContainer>
        <MessageContainer>
          <SubTitle>Our Message</SubTitle>
          <Text>JMI ALUMNI ASSOCIATION, VICTORIA, AUSTRALIA is an enlightened, resourceful and dynamic group of individuals residing in the state of Victoria who share a common vision of promoting the values of our institution, Jamia Millia Islamia. Members of the Association dearly uphold the principles of universal education, sharing knowledge and skills, supporting and caring for each other, responding to the needs of the broader community with empathy and compassion; both at a local level as well as overseas, particularly during unforeseen and unfortunate circumstances affecting fellow humans in anyway.  Association members fully embrace the spirit of giving back to the community in various capacities as well as promoting and preserving human rights globally.</Text>
          <LinkButton onClick={openModal}>Read More</LinkButton>
        </MessageContainer>
      </OuterContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="Overlay"
        style={customStyles}
        contentLabel="Example Modal"
      >
        <SubTitle>About Us</SubTitle>
        <ModalText>JMI Alumni Association of Victoria, Australia Incorporated is a registered body under Section 8 of Association Reform Act 2012.  The Association was formally registered with Consumer Affairs Victoria on 21 May 2021.</ModalText>
        <ModalText>The Association is an enlightened, resourceful and dynamic group of individuals residing in the state of Victoria who share a common vision of promoting the values of our institution, Jamia Millia Islamia. Members of the Association dearly uphold the principles of universal education, sharing knowledge and skills, supporting and caring for each other, responding to the needs of the broader community with empathy and compassion; both at a local level as well as overseas, particularly during unforeseen and unfortunate circumstances affecting fellow humans in anyway.  Association members fully embrace the spirit of giving back to the community in various capacities as well as promoting and preserving human rights globally. </ModalText>
        <ModalText>The Association maintains a strong ongoing connection with Jamia Millia Islamia in New Delhi to exchange common interests and work on areas of mutual co-operation.</ModalText>
        <ModalText>The members of the Association and their friends and families meet socially to celebrate various occasions and events creating an atmosphere of mutual trust and close friendship.</ModalText>
        <ModalText>The Association aims to mobilize effective advocacy and leadership in the realization of a humane, respectful, fair and just society for all Victorians through awareness and education. Our aspiration is to contribute to the emergence of future leaders and role models for a better tomorrow to fulfil the dreams of our founders.</ModalText>
        <ModalText>Let’s reflect for a moment on the words of Bharat Ratna recipient and the first education minister of independent India, Maulana Abul Kalam Azad, “Educationists should build the capacities of the spirit of inquiry, creativity, entrepreneurial and moral leadership among students and become their role model”.</ModalText>
      </Modal>
    </HeroContainer>
  )
};

export default HomeSection;