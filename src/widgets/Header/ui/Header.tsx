import { memo } from 'react';
import { Button, ImageBlock } from '@shared/ui';
import logoSrc from '@shared/assets/images/logo.svg';
import { Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HeaderStyled, LogoHeaderStyled } from './Header.styled';

export const Header = memo(() => {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <LogoHeaderStyled onClick={() => navigate('/main')}>
        <ImageBlock height={48} width={48} src={logoSrc} />
        <Flex vertical>
          <span>Pictura</span>
          <span>create the art by your own</span>
        </Flex>
      </LogoHeaderStyled>
      <Flex align="center" gap={4}>
        <Button onClick={() => navigate('/auth')} type="primary" text="Войти" />
        <Button onClick={() => navigate('/registration')} type="text" text="Регистрация" />
      </Flex>
    </HeaderStyled>
  );
});
