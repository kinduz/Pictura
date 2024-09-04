import { MdCamera } from 'react-icons/md';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, Flex } from 'antd';
import { Link } from 'react-router-dom';
import {
  Button, Card, Input, SecondaryText,
  FormStyled, LogoStyled, RegistrationTextStyled,
  LinkStyled,
} from '../../../shared';

import { AuthYupSchema } from '../lib';
import { AuthButtons } from './AuthButtons';

export const AuthComponent = () => {
  const { control } = useForm({
    resolver: yupResolver(AuthYupSchema),
    mode: 'onSubmit',
  });

  return (
    <Card isMargin gap={12}>
      <LogoStyled>
        <MdCamera />
      </LogoStyled>
      <h1>Добро пожаловать в PinClone</h1>
      <Flex gap={16} vertical>
        <FormStyled>
          <Input placeholder="Адрес электронной почты" control={control} name="email" label="Адрес электронной почты" type="text" />
          <Input placeholder="Пароль" control={control} name="password" label="Пароль" type="password" />
          <Flex justify="space-between" align="center">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <Checkbox {...field}>
                  Запомнить меня
                </Checkbox>
              )}
            />
            <LinkStyled to="/">Забыли пароль?</LinkStyled>
          </Flex>
          <Button type="primary" text="Войти" />
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
