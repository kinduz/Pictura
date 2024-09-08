import { useMutation } from 'react-query';
import axios from 'axios';
import { RegistrationType } from '../form';
import { NewUserModel } from '../../../../../../shared';

async function registration(data: RegistrationType) {
  const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/registration`, {
    data,
  });
  return response.data;
}

export function useRegistration() {
  const {
    mutate: registrationMutation,
    data,
    error,
    isLoading,
    isSuccess,
  } = useMutation<NewUserModel, any, RegistrationType>((data: RegistrationType) => registration(data));

  return {
    registrationMutation, data, error, isLoading, isSuccess,
  };
}
