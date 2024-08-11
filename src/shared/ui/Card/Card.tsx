import React from 'react';
import { CardStyled } from './Card.styled';

type TCardProps = React.PropsWithChildren & {
  title?: string;
  gap?: number;
}

export const Card: React.FC<TCardProps> = ({ children, title, gap }) => {
  return (
    <CardStyled gap={gap} title={title}>
      {children}
    </CardStyled>
  );
};
