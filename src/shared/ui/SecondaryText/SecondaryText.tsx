import { FC } from 'react';
import { SecondaryTextStyled } from './SecondaryText.styled';

type TProps = {
    text: string;
}
export const SecondaryText: FC<TProps> = ({ text }) => {
  return (
    <SecondaryTextStyled>{text}</SecondaryTextStyled>
  );
};
