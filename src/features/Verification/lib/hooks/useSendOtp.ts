import axios from 'axios';
import { useState } from 'react';
import { useNotification } from '../../../../shared';

export const useSendOtp = () => {
  const [errorSendOtp, setErrorSendOtp] = useState('');
  const openNotification = useNotification();

  const sendOtp = async (otp: string, email: string, setNextStep?: () => void) => {
    if (otp.length !== 6) {
      setErrorSendOtp('Введите код подтверждения');
      return;
    }
    try {
      const request = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/verify-email`, { otp, email });
      if (request.status === 200) {
        openNotification({
          message: 'Почта подтверждена',
          type: 'success',
        });
        setNextStep?.();
      }
    } catch (e: any) {
      setErrorSendOtp(e.response.data.message);
    }
  };

  return {
    sendOtp,
    errorSendOtp,
  };
};
