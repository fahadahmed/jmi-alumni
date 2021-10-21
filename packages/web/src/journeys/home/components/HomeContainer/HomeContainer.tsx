import React, { ReactNode } from 'react';

interface HomeContainerProps {
  children: ReactNode;
}
function HomeContainer({ children }: HomeContainerProps) {
  return (
    <div>
      {children}
    </div>
  )
};

export default HomeContainer;