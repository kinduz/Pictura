import { useEffect, useState } from 'react';
import { BaseErrorRequest } from '@shared/api';
import { useLogin } from '../api';
import { AuthType } from '../form/authForm.schema';

export const useAuth = () => {
  const [error, setError] = useState<BaseErrorRequest<{email: string}>>({
    status: 0,
    message: '',
    email: '',
  });
  const {
    authMutation, error: authError, isLoading, data,
  } = useLogin();
  const user = data?.data.user;
  const authSubmit = async (data: AuthType) => {
    await authMutation({ ...data });
  };
  useEffect(() => {
    if (authError) {
      setError({
        // @ts-ignore
        status: authError.status,
        // @ts-ignore
        message: authError.response?.data.message,
        // @ts-ignore
        email: authError.response?.data?.user?.email,
      });
    }
  }, [authError]);

  return {
    authSubmit,
    user,
    isLoading,
    error,
  };
};
