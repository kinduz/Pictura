import { MdCamera } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex } from 'antd';
import {
  Button, Card, Input, SecondaryText,
} from '../../../shared';
import { FormStyled, LogoStyled } from './Auth.styled';
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
      <Flex style={{ width: '100%' }} gap={16} vertical>
        <FormStyled>
          <Input placeholder="Адрес электронной почты" control={control} name="email" label="Адрес электронной почты" type="text" />
          <Input placeholder="Пароль" control={control} name="password" label="Пароль" type="password" />
          <Button type="primary" text="Войти" />
        </FormStyled>
        <SecondaryText text="или с помощью" />
        <AuthButtons />
      </Flex>
    </Card>
  );
};
