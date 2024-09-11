import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { AuthResponse, AuthService, BaseErrorRequest } from '@shared/api';
import { useStore } from '@shared/helpers';
import { AuthType } from '../form';

export function useLogin() {
  const { store } = useStore();
  const {
    mutate: authMutation,
    data,
    error,
    isLoading,
    isSuccess,
  } = useMutation<AxiosResponse<AuthResponse>, AxiosError<BaseErrorRequest<{email: string}>>, AuthType>((data: AuthType) => AuthService.login(data.email, data.password), {
    onSuccess(data) {
      const { accessToken, user } = data.data;
      localStorage.setItem('token', accessToken);
      store.setAuth(true);
      store.setUser(user);
    },
  });
  return {
    authMutation, data, error, isLoading, isSuccess,
  };
}
