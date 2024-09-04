import axios from 'axios';

export const useSendOtp = () => {
  const sendOtp = async (otp: string, email: string) => {
    const request = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/verify-email`, { otp, email });
    return request;
  };

  return {
    sendOtp,
  };
};
