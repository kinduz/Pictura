import { MdCamera } from 'react-icons/md';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, Flex } from 'antd';
import { Link } from 'react-router-dom';
import {
  Button, Card, Input, SecondaryText,
  FormStyled, LogoStyled, RegistrationTextStyled,
  LinkStyled,
  ErrorInputMessage,
  useNotification,
} from '@shared/index';

import { useEffect, useState } from 'react';
import { AuthYupSchema, useAuth } from '../lib';
import { AuthButtons } from './AuthButtons';

export const AuthComponent = () => {
  const openNotification = useNotification();

  const [errorCounter, setErrorCounter] = useState(0);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(AuthYupSchema),
    mode: 'onSubmit',
  });
  const email = useWatch({ control, name: 'email' });

  const {
    authSubmit, error, isLoading,
  } = useAuth();

  useEffect(() => {
    if (error.status === 401) {
      setErrorCounter((prev) => prev + 1);
    }
  }, [error]);

  useEffect(() => {
    if (errorCounter > 4) {
      openNotification({
        message: 'Проблемы с входом?',
        description: 'Вы можете сбросить пароль, если имеете проблемы со входом',
      });
    }
  }, [errorCounter]);

  return (
    <Card isMargin gap={12}>
      <LogoStyled>
        <MdCamera />
      </LogoStyled>
      <h1>Добро пожаловать в Pictura</h1>
      <Flex gap={16} vertical>
        <FormStyled onSubmit={handleSubmit(authSubmit)}>
          <Input placeholder="Адрес электронной почты" control={control} name="email" label="Адрес электронной почты" type="text" />
          {error.status === 403 && (
            <LinkStyled to={`../verification?email=${error.email}`}>Подтвердите ваш адрес электронной почты</LinkStyled>
          )}
          <Input placeholder="Пароль" control={control} name="password" label="Пароль" type="password" />
          <Flex justify="space-between" align="center">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <Checkbox checked={field.value} {...field}>
                  Запомнить меня
                </Checkbox>
              )}
            />
            <LinkStyled to={`/reset-password${email ? `?email=${email}` : ''}`}>Забыли пароль?</LinkStyled>
          </Flex>
          {error && (
            <ErrorInputMessage>{error.message}</ErrorInputMessage>
          )}
          <Button loading={isLoading} type="primary" text="Войти" htmlType="submit" />
        </FormStyled>
        <SecondaryText text="или с помощью" />
        <AuthButtons />
        <RegistrationTextStyled>
          <span>
            Нет созданного аккаунта?
          </span>
          <div>
            <Link to="/registration">Зарегистрируйтесь,</Link>
            {' '}
            чтобы творить искусство своими руками
          </div>
        </RegistrationTextStyled>
      </Flex>
    </Card>
  );
};
