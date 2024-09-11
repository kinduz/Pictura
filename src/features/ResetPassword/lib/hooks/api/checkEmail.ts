import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { BaseRequest } from '@shared/api';
import { EmailType } from '../../../ui/EmailForm/EmailForm';

async function checkEmail(email: string) {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/check-email`, {
    email,
  });
  return response.data;
}

export function useCheckEmail() {
  const {
    mutate: checkEmailMutation,
    data,
    error,
    isLoading,
    isSuccess,
  } = useMutation<BaseRequest, AxiosError, EmailType>((data: EmailType) => checkEmail(data.email));

  return {
    checkEmailMutation, data, error, isLoading, isSuccess,
  };
}
