import { useCheckEmail } from '@features/ResetPassword/lib';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorInputMessage, FormStyled } from '@shared/styles';
import { Button, Input } from '@shared/ui';
import { Flex } from 'antd';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const yupScheme = yup.object().shape({
  email: yup.string().required('Поле обязательно к заполнению').email('Кажется, почта написана неправильно...'),
});

export type EmailType = yup.InferType<typeof yupScheme>;

type TProps = EmailType & {
  setNextStep: () => void;
  setValueEmail: (email: string) => void;
}

export const EmailForm:FC<TProps> = ({ email, setNextStep, setValueEmail }) => {
  const navigate = useNavigate();

  const {
    checkEmailMutation, isSuccess, isLoading, error,
  } = useCheckEmail();

  const {
    control, handleSubmit, setValue, getValues,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(yupScheme),
  });

  const submitEmailForm = async (data: EmailType) => {
    await checkEmailMutation(data);
  };

  useEffect(() => {
    if (email) {
      setValue('email', email);
    }
  }, [email]);

  useEffect(() => {
    if (isSuccess) {
      const { email } = getValues();
      setValueEmail(email);
      setNextStep();
    }
  }, [isSuccess]);

  return (
    <Flex gap={16} style={{ width: '100%' }} vertical>
      <FormStyled onSubmit={handleSubmit(submitEmailForm)} style={{ alignItems: 'end' }}>
        <Input control={control} label="Адрес электронной почты" name="email" placeholder="Адрес электронной почты" />
        {error && (
          // @ts-ignore
          <ErrorInputMessage>{error.response?.data.message}</ErrorInputMessage>
        )}
        <Flex gap={16}>
          <Button loading={isLoading} type="primary" htmlType="submit" text="Отправить" />
          <Button onClick={() => navigate('/auth')} text="Вернуться" />
        </Flex>
      </FormStyled>
    </Flex>
  );
};
