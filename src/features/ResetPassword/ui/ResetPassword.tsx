import { useSetTitle } from '@shared/helpers';
import { useAntdStep } from '@shared/helpers/hooks';
import { Flex, Steps } from 'antd';
import { Card } from '@shared/ui';
import { useSearchParams } from 'react-router-dom';
import { VerificationForm } from '@features/Verification';
import { useState } from 'react';
import { resetPasswordSteps } from '../lib';
import { EmailForm } from './EmailForm';

export const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const [emailValue, setEmailValue] = useState(email || '');

  const setValue = (newEmail: string) => {
    setEmailValue(newEmail);
  };

  useSetTitle('Сброс пароля');
  const { current, next, prev } = useAntdStep();
  return (
    <Flex vertical align="center" gap={24}>
      <Steps progressDot current={current} items={resetPasswordSteps} />
      <Card minHeight={false}>
        {current === 0 && (
          <EmailForm setValueEmail={setValue} setNextStep={next} email={email || ''} />
        )}
        {current === 1 && (
          <VerificationForm email={emailValue} setNextStep={next} />
        )}
      </Card>
    </Flex>
  );
};
