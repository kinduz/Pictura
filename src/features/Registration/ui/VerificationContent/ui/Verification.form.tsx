import {
  Flex, GetProps, Input, Typography,
} from 'antd';
import { FC, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Button, ErrorInputMessage, useNotification } from '../../../../../shared';
import { useResendOtp, useSendOtp } from '../lib';

type TVerificationFormProps = {
    email: string;
    setNextStep: () => void;
}

type OTPProps = GetProps<typeof Input.OTP>;

export const VerificationForm:FC<TVerificationFormProps> = ({ email, setNextStep }) => {
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(false);

  const openNotification = useNotification();
  const { sendOtp } = useSendOtp();
  const { resendOtp } = useResendOtp();

  const onChange: OTPProps['onChange'] = (text) => {
    setOtp(text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  const handleClick = async () => {
    try {
      const request = await resendOtp(email);
      if (request.status === 200) {
        openNotification({
          message: 'Успешно подтверждена',
          description: request.data.message,
          type: 'success',
        });
        setIsDisabled(true);
        setTimeout(() => {
          setIsDisabled(false);
        }, 60000);
      }
    } catch (e: any) {
      setError(e.response.data.message);
    }
  };

  const submitOtpForm = async () => {
    if (otp.length !== 6) {
      setError('Введите код подтверждения');
      return;
    }
    try {
      const request: AxiosResponse<any, any> = await sendOtp(otp, email);
      if (request.status === 200) {
        openNotification({
          message: 'Почта подтверждена',
          type: 'success',
        });
        setNextStep();
      }
    } catch (e: any) {
      setError(e.response.data.message);
    }
  };

  return (
    <Flex gap="middle" align="center" vertical>
      <Typography.Title level={4}>
        Введите код подтверждения, отправленный на почту
        {' '}
        {email}
      </Typography.Title>
      <Input.OTP status={error && 'error'} size="large" length={6} value={otp} {...sharedProps} />
      <Flex style={{ width: '100%' }} justify="space-between">
        <Button loading={isDisabled} onClick={handleClick} fontSize={14} text="Отправить код еще раз" type="link" />
        <Button onClick={submitOtpForm} text="Подтвердить" type="primary" />
      </Flex>
      {error && (
        <ErrorInputMessage>{error}</ErrorInputMessage>
      )}
    </Flex>
  );
};
