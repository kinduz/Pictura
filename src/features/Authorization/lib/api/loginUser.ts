import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { UserLoginModel } from '@shared/lib';
import { AuthType } from '../form';

async function login(data: AuthType) {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/login`, {
    data,
  });
  return response.data;
}

export function useLogin() {
  const {
    mutate: authMutation,
    data,
    error,
    isLoading,
    isSuccess,
  } = useMutation<UserLoginModel, AxiosError, AuthType>((data: AuthType) => login(data));

  return {
    authMutation, data, error, isLoading, isSuccess,
  };
}
