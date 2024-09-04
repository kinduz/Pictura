import React from 'react';
import { CardStyled } from './Card.styled';

type TCardProps = React.PropsWithChildren & {
  title?: string;
  gap?: number;
  isMargin?: boolean;
  minHeight?: boolean;
}

export const Card: React.FC<TCardProps> = ({
  children, title, gap, isMargin, minHeight = true,
}) => {
  return (
    <CardStyled minHeight={minHeight} isMargin={isMargin} gap={gap} title={title}>
      {children}
    </CardStyled>
  );
};
