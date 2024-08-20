import { FC } from 'react';
import { AuthButtonStyled, IconStyled } from './AuthButton.styled';
import { TAuthButtonConfig } from '../../lib';

export const AuthButton: FC<TAuthButtonConfig> = ({
  Icon, backgroundColor, iconColor, serviceName, to,
}) => {
  return (
    <AuthButtonStyled backgroundColor={backgroundColor}>
      <IconStyled>
        <Icon color={iconColor} />
      </IconStyled>
    </AuthButtonStyled>
  );
};
