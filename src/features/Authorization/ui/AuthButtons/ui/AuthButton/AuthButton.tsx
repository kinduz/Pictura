import { FC } from 'react';
import { AuthButtonStyled, ContentStyled } from './AuthButton.styled';
import { TAuthButtonConfig } from '../../lib';

export const AuthButton: FC<TAuthButtonConfig> = ({
  Icon, backgroundColor, iconColor, serviceName, textColor, onClick,
}) => {
  return (
    <AuthButtonStyled onClick={() => onClick()} backgroundColor={backgroundColor}>
      <ContentStyled textColor={textColor}>
        <Icon color={iconColor} />
        <span>
          Войти с помощью
          {' '}
          {serviceName}
        </span>
      </ContentStyled>
    </AuthButtonStyled>
  );
};
