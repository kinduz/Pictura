import axios from 'axios';
import { useState } from 'react';
import { useNotification } from '../../../../shared';

export const useResendOtp = () => {
  const [errorResendOtp, setErrorResendOtp] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const openNotification = useNotification();
  const resendOtp = async (email: string) => {
    try {
      const request = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/resend-otp`, { email });
      if (request.status === 200) {
        openNotification({
          message: 'Успешно',
          description: request.data.message,
          type: 'success',
        });
        setIsDisabled(true);

        setTimeout(() => {
          setIsDisabled(false);
        }, 1);
      }
    } catch (e: any) {
      setErrorResendOtp(e.response.data.message);
    }
  };

  return { resendOtp, isDisabled, errorResendOtp };
};
