import { useResetPassword } from '@features/ResetPassword/lib';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorInputMessage, FormStyled } from '@shared/styles';
import { Button, Input } from '@shared/ui';
import { Flex } from 'antd';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ResetPasswordType, resetYupScheme } from '../lib';

type TProps = {
  setNextStep: () => void;
  email: string;
}

export const ResetForm:FC<TProps> = ({ email, setNextStep }) => {
  const {
    isSuccess, isLoading, error, resetPasswordMutation,
  } = useResetPassword();

  const {
    control, handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(resetYupScheme),
  });

  const submitResetForm = async (data: ResetPasswordType) => {
    await resetPasswordMutation({ ...data, email });
  };

  useEffect(() => {
    if (isSuccess) {
      setNextStep();
    }
  }, [isSuccess]);

  return (
    <FormStyled onSubmit={handleSubmit(submitResetForm)}>
      <Flex gap={16} style={{ width: '100%' }} vertical align="end">
        <Input control={control} type="password" label="Пароль" name="password" placeholder="Пароль" />
        <Input control={control} type="password" label="Подтвердите пароль" name="confirmPassword" placeholder="Подтвердите пароль" />
        {error && (
          // @ts-ignore
          <ErrorInputMessage>{error.response?.data.message}</ErrorInputMessage>
        )}
        <Flex gap={16}>
          <Button loading={isLoading} type="primary" htmlType="submit" text="Отправить" />
        </Flex>
      </Flex>
    </FormStyled>
  );
};
