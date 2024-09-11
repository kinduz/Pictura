import { useSetTitle } from '@shared/helpers';
import { useAntdStep } from '@shared/helpers/hooks';
import { Flex, Steps } from 'antd';
import { Card, SuccessStep } from '@shared/ui';
import { useSearchParams } from 'react-router-dom';
import { VerificationForm } from '@features/Verification';
import { useState } from 'react';
import { resetPasswordSteps } from '../lib';
import { EmailForm } from './EmailForm';
import { ResetForm } from './ResetForm';

export const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const [emailValue, setEmailValue] = useState(email || '');

  const setValue = (newEmail: string) => {
    setEmailValue(newEmail);
  };

  useSetTitle('Сброс пароля');
  const { current, next } = useAntdStep();
  return (
    <Flex vertical align="center" gap={24}>
      <Steps progressDot current={current} items={resetPasswordSteps} />
      <Card minHeight={false}>
        {current === 0 && (
          <EmailForm setValueEmail={setValue} setNextStep={next} email={email || ''} />
        )}
        {current === 1 && (
          <VerificationForm isDbConfirm={false} email={emailValue} setNextStep={next} />
        )}
        {current === 2 && (
          <ResetForm email={emailValue} setNextStep={next} />
        )}
        {current === 3 && (
          <SuccessStep
            toLink="/auth"
            buttonText="Авторизоваться"
            title="Ура, пароль успешно изменен!"
          />
        )}
      </Card>
    </Flex>
  );
};
