import React from 'react';
import { MdCamera } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, Input } from '../../../shared';
import { FormStyled, LogoStyled } from './Auth.styled';
import { AuthYupSchema } from '../lib';

export const AuthComponent = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(AuthYupSchema),
    mode: 'onSubmit',
  });
  return (
    <Card gap={12}>
      <LogoStyled>
        <MdCamera />
      </LogoStyled>
      <h1>Добро пожаловать в PinClone</h1>
      <FormStyled style={{ width: '100%' }}>
        <Input placeholder="Адрес электронной почты" control={control} name="email" label="Адрес электронной почты" type="text" />
        <Input placeholder="Пароль" control={control} name="password" label="Пароль" type="password" />
      </FormStyled>
    </Card>
  );
};
