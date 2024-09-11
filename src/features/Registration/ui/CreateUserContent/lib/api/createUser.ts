import {
  AuthResponse, AuthService, BaseErrorRequest, BaseUserModel,
} from '@shared/api';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { RegistrationType } from '../form';

export function useRegistration() {
  const {
    mutate: registrationMutation,
    data,
    error,
    isLoading,
    isSuccess,
  } = useMutation<AxiosResponse<AuthResponse>, AxiosError<BaseErrorRequest<BaseUserModel>>, RegistrationType>((data: RegistrationType) => AuthService.registration(data));

  return {
    registrationMutation, data, error, isLoading, isSuccess,
  };
}
