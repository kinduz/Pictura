import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { ResetPasswordType } from '@features/ResetPassword/ui/ResetForm';
import { BaseRequest } from '@shared/api';

type TProps = ResetPasswordType & {
  email: string;
}

async function resetPassword(data: TProps) {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/reset-password`, {
    ...data,
  });
  return response.data;
}

export function useResetPassword() {
  const {
    mutate: resetPasswordMutation,
    data,
    error,
    isLoading,
    isSuccess,
  } = useMutation<BaseRequest, AxiosError, TProps>((data: TProps) => resetPassword(data));

  return {
    resetPasswordMutation, data, error, isLoading, isSuccess,
  };
}
