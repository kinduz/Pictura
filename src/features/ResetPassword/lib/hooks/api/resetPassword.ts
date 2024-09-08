import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { BaseRequest } from '@shared/lib';
import { ResetPasswordType } from '@features/ResetPassword/ui/ResetForm';

type TProps = ResetPasswordType & {
  email: string;
}

async function resetPassword(data: TProps) {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/reset-password`, {
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
