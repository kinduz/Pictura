import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import {
  Button, Input,
  FormStyled, RegistrationTextStyled,
  LinkStyled,
  ErrorInputMessage,
} from '@shared/index';

import { RegistrationType, RegYupSchema } from '../lib';
import { CheckboxStyled } from './CreateUser.styled';

type TCreateUserFormProps = {
  isLoading: boolean;
  // eslint-disable-next-line no-unused-vars
  submitForm: (data: RegistrationType) => Promise<void>;
  errorMsg?: string;
}

export const CreateUserForm: FC<TCreateUserFormProps> = ({ isLoading, submitForm, errorMsg }) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(RegYupSchema),
    mode: 'onSubmit',
  });

  return (
    <Flex gap={16} vertical>
      <FormStyled onSubmit={handleSubmit(submitForm)}>
        <Input placeholder="Имя" control={control} name="first_name" label="Имя" type="text" />
        <Input placeholder="Фамилия" control={control} name="last_name" label="Фамилия" type="text" />
        <Input placeholder="Логин" control={control} name="login" label="Логин" type="text" />
        <Input placeholder="Адрес электронной почты" control={control} name="email" label="Адрес электронной почты" type="text" />
        <Input placeholder="Пароль" control={control} name="password" label="Пароль" type="password" />
        <Input placeholder="Подтвердите пароль" control={control} name="confirmPassword" label="Подтвердите пароль" type="password" />
        <Controller
          name="accessPolicy"
          control={control}
          defaultValue={false}
          render={({ field, fieldState: { error: fieldError } }) => {
            return (
              <Flex vertical gap={8} align="start">
                <CheckboxStyled {...field}>
                  Регистрируясь, вы принимаете
                  {' '}
                  <LinkStyled to="/policy">пользовательское соглашение</LinkStyled>
                </CheckboxStyled>
                {fieldError && (
                  <ErrorInputMessage>{fieldError.message}</ErrorInputMessage>
                )}
              </Flex>

            );
          }}
        />
        {errorMsg && (
          <ErrorInputMessage>{errorMsg}</ErrorInputMessage>
        )}
        <Button loading={isLoading} htmlType="submit" type="primary" text="Регистрация" />
      </FormStyled>
      <RegistrationTextStyled>
        <span>
          Уже зарегистрированы?
        </span>
        <div>
          <Link to="/auth">Войдите,</Link>
          {' '}
          чтобы насладиться всеми возможностями Pictura
        </div>
      </RegistrationTextStyled>
    </Flex>
  );
};
