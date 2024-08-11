import React from 'react';
import { LayoutStyled } from './Layout.styled';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <LayoutStyled className="app">
      {children}
    </LayoutStyled>
  );
};
