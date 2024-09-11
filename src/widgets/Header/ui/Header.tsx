import { memo } from 'react';
import { Button, ImageBlock } from '@shared/ui';
import logoSrc from '@shared/assets/images/logo.svg';
import { Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@shared/helpers';
import { observer } from 'mobx-react-lite';
import { HeaderLink, HeaderStyled, LogoHeaderStyled } from './Header.styled';
import { useLogout } from '../lib';

export const Header = memo(observer(() => {
  const navigate = useNavigate();
  const { isAuth } = useStore().store;
  const { handleLogout } = useLogout();
  return (
    <HeaderStyled isAuth={isAuth}>
      <LogoHeaderStyled onClick={() => navigate(`${isAuth ? '/picts' : '/landing'}`)}>
        <ImageBlock height={52} width={52} src={logoSrc} />
        {!isAuth && (
          <Flex vertical>
            <span>Pictura</span>
            <span>create the art by your own</span>
          </Flex>
        )}
      </LogoHeaderStyled>
      <Flex align="center" justify="space-between" style={{ width: '100%' }}>
        <Flex align="center" gap={4}>
          <HeaderLink to="/picts">Посмотреть</HeaderLink>
          {isAuth && (
            <HeaderLink to="/create">Создать</HeaderLink>
          )}
        </Flex>
        {!isAuth ? (
          <Flex align="center" gap={16}>
            <Button onClick={() => navigate('/auth')} type="primary" text="Войти" />
            <Button onClick={() => navigate('/registration')} type="default" text="Регистрация" />
          </Flex>
        ) : (
          <Button onClick={handleLogout} type="primary" text="Выйти" />
        )}
      </Flex>
    </HeaderStyled>
  );
}));
