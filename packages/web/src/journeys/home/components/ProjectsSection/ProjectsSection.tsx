import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  grid-area: projects;
  display: grid;
  min-height: 400px;
  background-color: #efefef;
  justify-content: center;
  align-items: center;
`;

function ProjectsSection() {
  return (
    <Container>Projects Section</Container>
  )
}

export default ProjectsSection;