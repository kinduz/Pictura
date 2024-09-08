import { useEffect, useState } from 'react';
import { useLogin } from '../api';
import { AuthType } from '../form/authForm.schema';

export const useAuth = () => {
  const [error, setError] = useState<{status?: number, message: string, email?: string}>({
    status: undefined,
    message: '',
    email: '',
  });
  const {
    authMutation, data, isLoading, error: authError, isSuccess,
  } = useLogin();

  const authSubmit = async (data: AuthType) => {
    await authMutation(data);
  };

  useEffect(() => {
    if (authError) {
      setError({
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
    data,
    isLoading,
    error,
    isSuccess,
  };
};
