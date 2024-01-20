import React, { type ReactNode } from 'react';
import { Header } from '@/components/Header/Header';

interface MainTemplateProps {
  children: ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
