import { memo } from 'react';
import { Button, ImageBlock } from '@shared/ui';
import logoSrc from '@shared/assets/images/logo.svg';
import { Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@shared/helpers';
import { observer } from 'mobx-react-lite';
import { HeaderStyled, LogoHeaderStyled } from './Header.styled';
import { useLogout } from '../lib';

export const Header = memo(observer(() => {
  const navigate = useNavigate();
  const { isAuth } = useStore().store;
  const { handleLogout } = useLogout();
  return (
    <HeaderStyled>
      <LogoHeaderStyled onClick={() => navigate('/main')}>
        <ImageBlock height={48} width={48} src={logoSrc} />
        <Flex vertical>
          <span>Pictura</span>
          <span>create the art by your own</span>
        </Flex>
      </LogoHeaderStyled>
      {!isAuth ? (
        <Flex align="center" gap={4}>
          <Button onClick={() => navigate('/auth')} type="primary" text="Войти" />
          <Button onClick={() => navigate('/registration')} type="text" text="Регистрация" />
        </Flex>
      ) : (
        <Button onClick={handleLogout} type="primary" text="Выйти" />
      )}

    </HeaderStyled>
  );
}));
