import React from 'react';
import styled from '@emotion/styled';

const SectionTitle = styled.h2`
  font-family: 'Source Sans Pro';
  font-size: 48px;
  font-weight: 600;
  color: #2C6150;
`;
function NewsSection() {
  return (
    <div>
      <SectionTitle>News and Events</SectionTitle>
    </div>
  )
}

export default NewsSection;