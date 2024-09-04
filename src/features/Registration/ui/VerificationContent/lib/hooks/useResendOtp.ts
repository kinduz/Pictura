import axios from 'axios';

export const useResendOtp = () => {
  const resendOtp = async (email: string) => {
    const request = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/resend-otp`, { email });
    return request;
  };

  return { resendOtp };
};
