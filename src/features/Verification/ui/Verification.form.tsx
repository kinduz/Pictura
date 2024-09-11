import {
  Flex, GetProps, Input, Typography,
} from 'antd';
import { FC, useState, useEffect } from 'react';
import { Button, ErrorInputMessage } from '../../../shared';
import { useResendOtp, useSendOtp } from '../lib';

type TVerificationFormProps = {
    email: string;
    setNextStep?: () => void;
    isDbConfirm?: boolean;
}

type OTPProps = GetProps<typeof Input.OTP>;

export const VerificationForm:FC<TVerificationFormProps> = ({ email, setNextStep, isDbConfirm = true }) => {
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { sendOtp, errorSendOtp } = useSendOtp();
  const { resendOtp, errorResendOtp, isDisabled } = useResendOtp();

  const onChange: OTPProps['onChange'] = (text) => {
    setOtp(text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  useEffect(() => {
    if (email) {
      resendOtp(email);
    }
  }, []);

  useEffect(() => {
    if (errorResendOtp || errorSendOtp) {
      setError(errorResendOtp || errorSendOtp);
    }
  }, [errorResendOtp, errorSendOtp]);

  return (
    <Flex gap="middle" align="center" vertical>
      <Typography.Title level={4}>
        Введите код подтверждения, отправленный на почту
        {' '}
        {email}
      </Typography.Title>
      <Input.OTP status={error && 'error'} size="large" length={6} value={otp} {...sharedProps} />
      <Flex style={{ width: '100%' }} justify="space-between">
        <Button loading={isDisabled} onClick={() => resendOtp(email)} fontSize={14} text="Отправить код еще раз" type="link" />
        <Button onClick={() => sendOtp(otp, email, setNextStep, isDbConfirm)} text="Подтвердить" type="primary" />
      </Flex>
      {error && (
        <ErrorInputMessage>{error}</ErrorInputMessage>
      )}
    </Flex>
  );
};
