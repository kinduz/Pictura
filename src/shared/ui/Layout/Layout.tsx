import React from 'react';
import { useStore } from '@shared/helpers';
import { LayoutStyled } from './Layout.styled';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { store } = useStore();
  return (
    <LayoutStyled isAuth={store.isAuth} className="app">
      {children}
    </LayoutStyled>
  );
};
