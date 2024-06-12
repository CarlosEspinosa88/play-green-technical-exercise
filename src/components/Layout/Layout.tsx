import { ReactNode } from 'react';
import { BodyContainer, MainContainer } from './Layout.styles';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <BodyContainer>
      <MainContainer>{children}</MainContainer>
    </BodyContainer>
  );
};

export default Layout;
